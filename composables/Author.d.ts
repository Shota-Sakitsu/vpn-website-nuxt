type Author = {
	name: string;
	alphabetName?: string;
	iconPath?: string;
	homepageUrl?: string;
	favs?: string[];
};

type TypedAuthorType = "name" | "alphabetName" | "iconPath" | "homepageUrl" | "favs";

type TypedAuthor = {
	type: TypedAuthorType[],
	name: string,
	alphabetName?: string,
	iconPath?: string,
	homepageUrl?: string,
	favs?: string[] | [],
};

export { Author, TypedAuthor };