import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";


// ─────────────────────────────────────────────────────────────────────────────
// USER
// ─────────────────────────────────────────────────────────────────────────────
export const user = sqliteTable("user", {
	id: text("id").primaryKey(),
	clerkId: text("clerk_id").notNull().unique(),
	firstName: text("first_name"),
	lastName: text("last_name"),
	email: text("email"),
	imageUrl: text("image_url"),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	role: text("role").notNull().default("user"),
});

// ─────────────────────────────────────────────────────────────────────────────
// POST
// ─────────────────────────────────────────────────────────────────────────────
export const post = sqliteTable("post", {
	id: text("id").primaryKey(),
	title: text("title").notNull(),
	slug: text("slug").notNull().unique(),
	content: text("content").notNull(), // simpan JSON sebagai text
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	status: text("status").notNull().default("draft"),
	authorId: text("author_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
});

// ─────────────────────────────────────────────────────────────────────────────
// COMMENT (self‐relation; but kita annotasi untuk TS)
// ─────────────────────────────────────────────────────────────────────────────
export const comment = sqliteTable("comment", {
  id: text("id").primaryKey(),
  content: text("content").notNull(),
  created_at: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  post_id: text("post_id")
    .notNull()
    .references(() => post.id, { onDelete: "cascade" }),
  author: text("author").notNull(),
  author_email: text("author_email").notNull(),
});

// ─────────────────────────────────────────────────────────────────────────────
// SUBMISSION_CATEGORY
// ─────────────────────────────────────────────────────────────────────────────
export const submissionCategory = sqliteTable("submission_category", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	slug: text("slug").notNull().unique(),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

// ─────────────────────────────────────────────────────────────────────────────
// SUBMISSION
// ─────────────────────────────────────────────────────────────────────────────
export const submission = sqliteTable("submission", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	slug: text("slug").notNull().unique(),
	categoryId: text("category_id")
		.notNull()
		.references(() => submissionCategory.id, { onDelete: "cascade" }),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	status: text("status").notNull(),
	openDate: text("open_date"),
	closeDate: text("close_date"),
	quota: integer("quota").notNull(),
});

// ─────────────────────────────────────────────────────────────────────────────
// PARTICIPANT
// ─────────────────────────────────────────────────────────────────────────────
export const participant = sqliteTable("participant", {
	id: text("id").primaryKey(),
	submissionId: text("submission_id")
		.notNull()
		.references(() => submission.id),
	submissionStatus: text("submission_status").notNull().default("unverified"),
	name: text("name").notNull(),
	nickname: text("nickname"),
	nik: text("nik"),
	nisn: text("nisn"),
	dateOfBirth: text("date_of_birth"),
	placeOfBirth: text("place_of_birth"),
	gender: text("gender"),
	religion: text("religion"),
	hobby: text("hobby"),
	aspiration: text("aspiration"),
	nationality: text("nationality"),
	birthOrder: integer("birth_order"),
	totalSiblings: integer("total_siblings"),
	birthStatus: text("birth_status"),
	bloodType: text("blood_type"),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	userId: text("user_id").references(() => user.id),
	siblings: integer("siblings", { mode: "boolean" }),
	siblingsName: text("siblings_name"),
	siblingsGrade: text("siblings_grade"),
	medicalHistory: text("medical_history"),
	majorIllness: text("major_illness"),
	minorIllness: text("minor_illness"),
});

// ─────────────────────────────────────────────────────────────────────────────
// PARTICIPANT_ADDRESS
// ─────────────────────────────────────────────────────────────────────────────
export const participantAddress = sqliteTable("participant_address", {
	id: text("id").primaryKey(),
	participantId: text("participant_id")
		.notNull()
		.unique()
		.references(() => participant.id),
	address: text("address"),
	district: text("district"),
	subDistrict: text("sub_district"),
	city: text("city"),
	province: text("province"),
	postalCode: text("postal_code"),
});

// ─────────────────────────────────────────────────────────────────────────────
// PARTICIPANT_PARENT
// ─────────────────────────────────────────────────────────────────────────────
export const participantParent = sqliteTable("participant_parent", {
	id: text("id").primaryKey(),
	participantId: text("participant_id")
		.notNull()
		.unique()
		.references(() => participant.id),
	parentPhone: text("parent_phone"),
	parentEmail: text("parent_email"),
	fatherName: text("father_name"),
	fatherNationalId: text("father_national_id"),
	fatherBirthPlace: text("father_birth_place"),
	fatherBirthDate: text("father_birth_date"),
	fatherReligion: text("father_religion"),
	fatherOccupation: text("father_occupation"),
	fatherEducation: text("father_education"),
	fatherIncome: text("father_income"),
	fatherCitizenship: text("father_citizenship"),
	motherName: text("mother_name"),
	motherNationalId: text("mother_national_id"),
	motherBirthPlace: text("mother_birth_place"),
	motherBirthDate: text("mother_birth_date"),
	motherReligion: text("mother_religion"),
	motherOccupation: text("mother_occupation"),
	motherEducation: text("mother_education"),
	motherIncome: text("mother_income"),
	motherCitizenship: text("mother_citizenship"),
});

// ─────────────────────────────────────────────────────────────────────────────
// PARTICIPANT_EDUCATION
// ─────────────────────────────────────────────────────────────────────────────
export const participantEducation = sqliteTable("participant_education", {
	id: text("id").primaryKey(),
	participantId: text("participant_id")
		.notNull()
		.unique()
		.references(() => participant.id),
	schoolName: text("school_name"),
	schoolAddress: text("school_address"),
	schoolCity: text("school_city"),
	schoolDistrict: text("school_district"),
	schoolSubDistrict: text("school_sub_district"),
	schoolProvince: text("school_province"),
	schoolPostalCode: text("school_postal_code"),
	schoolPhone: text("school_phone"),
	schoolEmail: text("school_email"),
});

// ─────────────────────────────────────────────────────────────────────────────
// PARTICIPANT_DOCUMENT
// ─────────────────────────────────────────────────────────────────────────────
export const participantDocument = sqliteTable("participant_document", {
	id: text("id").primaryKey(),
	participantId: text("participant_id")
		.notNull()
		.unique()
		.references(() => participant.id),
	photo: text("photo"),
	familyCard: text("family_card"),
	birthCertificate: text("birth_certificate"),
	skhus: text("skhus"),
	graduationCertificate: text("graduation_certificate"),
});
