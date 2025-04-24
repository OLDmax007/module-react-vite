export interface PostDMJSModel {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: ReactionsDMJSModel;
	views: number;
	userId: number;
}
export interface ReactionsDMJSModel {
	likes: number;
	dislikes: number;
}