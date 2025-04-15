export interface PostModel {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: ReactionsModel;
	views: number;
	userId: number;
}
interface ReactionsModel {
	likes: number;
	dislikes: number;
}