import {ChatMessage} from "../api/Support";

export interface ChatRoom {
	name?: string
	id?: number
	messages?: ChatMessage[]
}