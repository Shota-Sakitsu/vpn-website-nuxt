import type {Author, TypedAuthor} from "~/composables/Author";

export type PostType = {
	slug: string;
	title: string;
	author: Author|TypedAuthor;
	tags: string[];
	content: string;
}