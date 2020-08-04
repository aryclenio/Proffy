import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";
import { Request, Response } from "express";

interface ScheduleItem {
  from: string;
  to: string;
  week_day: number;
}

export default class ClassesController {
  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    const trx = await db.transaction();

    try {
      // Retorna o id inserido
      const insertedUserIds = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUserIds[0];

      const insertedClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();

      return response.status(201).send();
    } catch (error) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error creating a class",
      });
    }
  }
}
