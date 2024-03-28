export type TConversation = {
  conversationId: string;
  conversationTitle: string;
};

export interface IUserConversationMessage {
  role: "user";
  content: string;
}

export interface IAIConversationMessage
  extends Omit<IUserConversationMessage, "role"> {
  role: "assistant";

  isPending?: boolean;
}

export type IConversationMessage =
  | IUserConversationMessage
  | IAIConversationMessage;
