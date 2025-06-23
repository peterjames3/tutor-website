import { pgTable, varchar, serial, text, timestamp } from "drizzle-orm/pg-core";

// Common fields

const name = varchar("name", { length: 255 }).notNull();
const email = varchar("email", { length: 255 }).notNull().unique();
const phone = varchar("phone", { length: 50 }).notNull();
const level = varchar("level", { length: 50 }).notNull();
const assistant = varchar("assistant", { length: 255 }).default("Liam James");
const status = text("status").default("Pending");
const supportType = text("support_type").notNull();

export const baseSchema = {
  name,
  email,
  phone_number: phone,
  level,
};
export const examPrep = pgTable("exam_prep_students", {
  id: serial("id").primaryKey(),
  ...baseSchema,
  exam: text("exam").notNull(),
  subject: text("subject").notNull(),
  exam_date: text("exam_date").notNull(),
  assistant,
  status,
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .$onUpdate(() => new Date()),
});

export const tutoringStudents = pgTable("tutoring_students", {
  id: serial("id").primaryKey(),
  ...baseSchema,
  subject_help: text("subject_help").notNull(),
  subject: text("subject").notNull(),
  exam_date: text("exam_date").notNull(),
  assistant,
  status,
  support_type: supportType,
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .$onUpdate(() => new Date()),
});

export const endToEndSupportStudents = pgTable("end_to_end_support_students", {
  id: serial("id").primaryKey(),
  ...baseSchema,
  subject: text("subject").notNull(),
  exam: text("exam").notNull(),
  exam_date: text("start_date").notNull(),
  assistant,
  status,
  support_type: supportType,
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .$onUpdate(() => new Date()),
});

