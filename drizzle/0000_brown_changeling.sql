CREATE TABLE `comment` (
	`id` text PRIMARY KEY NOT NULL,
	`content` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`post_id` text NOT NULL,
	`author` text NOT NULL,
	`author_email` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `post`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `participant` (
	`id` text PRIMARY KEY NOT NULL,
	`submission_id` text NOT NULL,
	`submission_status` text DEFAULT 'unverified' NOT NULL,
	`name` text NOT NULL,
	`nickname` text,
	`nik` text,
	`nisn` text,
	`date_of_birth` text,
	`place_of_birth` text,
	`gender` text,
	`religion` text,
	`hobby` text,
	`aspiration` text,
	`nationality` text,
	`birth_order` integer,
	`total_siblings` integer,
	`birth_status` text,
	`blood_type` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`user_id` text,
	`siblings` integer,
	`siblings_name` text,
	`siblings_grade` text,
	`medical_history` text,
	`major_illness` text,
	`minor_illness` text,
	FOREIGN KEY (`submission_id`) REFERENCES `submission`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `participant_address` (
	`id` text PRIMARY KEY NOT NULL,
	`participant_id` text NOT NULL,
	`address` text,
	`district` text,
	`sub_district` text,
	`city` text,
	`province` text,
	`postal_code` text,
	FOREIGN KEY (`participant_id`) REFERENCES `participant`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `participant_address_participant_id_unique` ON `participant_address` (`participant_id`);--> statement-breakpoint
CREATE TABLE `participant_document` (
	`id` text PRIMARY KEY NOT NULL,
	`participant_id` text NOT NULL,
	`photo` text,
	`family_card` text,
	`birth_certificate` text,
	`skhus` text,
	`graduation_certificate` text,
	FOREIGN KEY (`participant_id`) REFERENCES `participant`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `participant_document_participant_id_unique` ON `participant_document` (`participant_id`);--> statement-breakpoint
CREATE TABLE `participant_education` (
	`id` text PRIMARY KEY NOT NULL,
	`participant_id` text NOT NULL,
	`school_name` text,
	`school_address` text,
	`school_city` text,
	`school_district` text,
	`school_sub_district` text,
	`school_province` text,
	`school_postal_code` text,
	`school_phone` text,
	`school_email` text,
	FOREIGN KEY (`participant_id`) REFERENCES `participant`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `participant_education_participant_id_unique` ON `participant_education` (`participant_id`);--> statement-breakpoint
CREATE TABLE `participant_parent` (
	`id` text PRIMARY KEY NOT NULL,
	`participant_id` text NOT NULL,
	`parent_phone` text,
	`parent_email` text,
	`father_name` text,
	`father_national_id` text,
	`father_birth_place` text,
	`father_birth_date` text,
	`father_religion` text,
	`father_occupation` text,
	`father_education` text,
	`father_income` text,
	`father_citizenship` text,
	`mother_name` text,
	`mother_national_id` text,
	`mother_birth_place` text,
	`mother_birth_date` text,
	`mother_religion` text,
	`mother_occupation` text,
	`mother_education` text,
	`mother_income` text,
	`mother_citizenship` text,
	FOREIGN KEY (`participant_id`) REFERENCES `participant`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `participant_parent_participant_id_unique` ON `participant_parent` (`participant_id`);--> statement-breakpoint
CREATE TABLE `post` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`content` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`author_id` text NOT NULL,
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `post_slug_unique` ON `post` (`slug`);--> statement-breakpoint
CREATE TABLE `submission` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`category_id` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`status` text NOT NULL,
	`open_date` text,
	`close_date` text,
	`quota` integer NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `submission_category`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `submission_slug_unique` ON `submission` (`slug`);--> statement-breakpoint
CREATE TABLE `submission_category` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `submission_category_slug_unique` ON `submission_category` (`slug`);--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`clerk_id` text NOT NULL,
	`first_name` text,
	`last_name` text,
	`email` text,
	`image_url` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`role` text DEFAULT 'user' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_clerk_id_unique` ON `user` (`clerk_id`);