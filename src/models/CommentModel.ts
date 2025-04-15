export interface CommentModel {
	id: number;
	body: string;
	postId: number;
	likes: number;
	user: UserModel;
}
interface UserModel {
	id: number;
	username: string;
	fullName: string;
}