import { CustomEmojiView } from "../views";

export class CreateCustomEmoji {
  category: string;
  shortcode: string;
  image_url: string;
  alt_text: string;
  keywords: string[];
  auth: string;

  constructor(init: CreateCustomEmoji) {
    Object.assign(this, init);
  }
}

export class EditCustomEmoji {
  id: number;
  category: string;
  image_url: string;
  alt_text: string;
  keywords: string[];
  auth: string;

  constructor(init: EditCustomEmoji) {
    Object.assign(this, init);
  }
}

export class DeleteCustomEmoji {
  id: number;
  auth: string;

  constructor(init: DeleteCustomEmoji) {
    Object.assign(this, init);
  }
}

export class DeleteCustomEmojiResponse {
  id: number;
  success: boolean;

  constructor(init: DeleteCustomEmojiResponse) {
    Object.assign(this, init);
  }
}

export class CustomEmojiResponse {
  custom_emoji: CustomEmojiView;

  constructor(init: CustomEmojiResponse) {
    Object.assign(this, init);
  }
}
