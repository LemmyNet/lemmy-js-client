// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export type LemmyErrorType =
  | { error: "report_reason_required" }
  | { error: "report_too_long" }
  | { error: "not_a_moderator" }
  | { error: "not_an_admin" }
  | { error: "cant_block_yourself" }
  | { error: "cant_block_admin" }
  | { error: "couldnt_update_user" }
  | { error: "passwords_do_not_match" }
  | { error: "email_not_verified" }
  | { error: "email_required" }
  | { error: "couldnt_update_comment" }
  | { error: "couldnt_update_private_message" }
  | { error: "cannot_leave_admin" }
  | { error: "no_lines_in_html" }
  | { error: "site_metadata_page_is_not_doctype_html" }
  | { error: "pictrs_response_error"; message: string }
  | { error: "pictrs_purge_response_error"; message: string }
  | { error: "pictrs_caching_disabled" }
  | { error: "image_url_missing_path_segments" }
  | { error: "image_url_missing_last_path_segment" }
  | { error: "pictrs_api_key_not_provided" }
  | { error: "no_content_type_header" }
  | { error: "not_an_image_type" }
  | { error: "not_a_mod_or_admin" }
  | { error: "no_admins" }
  | { error: "not_top_admin" }
  | { error: "not_top_mod" }
  | { error: "not_logged_in" }
  | { error: "site_ban" }
  | { error: "deleted" }
  | { error: "banned_from_community" }
  | { error: "couldnt_find_community" }
  | { error: "couldnt_find_person" }
  | { error: "couldnt_find_comment" }
  | { error: "couldnt_find_comment_report" }
  | { error: "couldnt_find_post_report" }
  | { error: "couldnt_find_private_message_report" }
  | { error: "couldnt_find_local_user" }
  | { error: "couldnt_find_person_mention" }
  | { error: "couldnt_find_registration_application" }
  | { error: "couldnt_find_comment_reply" }
  | { error: "couldnt_find_private_message" }
  | { error: "couldnt_find_activity" }
  | { error: "couldnt_find_oauth_provider" }
  | { error: "person_is_blocked" }
  | { error: "community_is_blocked" }
  | { error: "instance_is_blocked" }
  | { error: "downvotes_are_disabled" }
  | { error: "instance_is_private" }
  | { error: "invalid_password" }
  | { error: "site_description_length_overflow" }
  | { error: "honeypot_failed" }
  | { error: "registration_application_is_pending" }
  | { error: "cant_enable_private_instance_and_federation_together" }
  | { error: "locked" }
  | { error: "couldnt_create_comment" }
  | { error: "max_comment_depth_reached" }
  | { error: "no_comment_edit_allowed" }
  | { error: "only_admins_can_create_communities" }
  | { error: "community_already_exists" }
  | { error: "language_not_allowed" }
  | { error: "only_mods_can_post_in_community" }
  | { error: "couldnt_update_post" }
  | { error: "no_post_edit_allowed" }
  | { error: "couldnt_find_post" }
  | { error: "edit_private_message_not_allowed" }
  | { error: "site_already_exists" }
  | { error: "application_question_required" }
  | { error: "invalid_default_post_listing_type" }
  | { error: "registration_closed" }
  | { error: "registration_application_answer_required" }
  | { error: "registration_username_required" }
  | { error: "email_already_exists" }
  | { error: "username_already_exists" }
  | { error: "federation_forbidden_by_strict_allow_list" }
  | { error: "person_is_banned_from_community" }
  | { error: "object_is_not_public" }
  | { error: "invalid_community" }
  | { error: "cannot_create_post_or_comment_in_deleted_or_removed_community" }
  | { error: "cannot_receive_page" }
  | { error: "new_post_cannot_be_locked" }
  | { error: "only_local_admin_can_remove_community" }
  | { error: "only_local_admin_can_restore_community" }
  | { error: "no_id_given" }
  | { error: "incorrect_login" }
  | { error: "invalid_query" }
  | { error: "object_not_local" }
  | { error: "post_is_locked" }
  | { error: "person_is_banned_from_site"; message: string }
  | { error: "invalid_vote_value" }
  | { error: "page_does_not_specify_creator" }
  | { error: "no_email_setup" }
  | { error: "local_site_not_setup" }
  | { error: "email_smtp_server_needs_a_port" }
  | { error: "missing_an_email" }
  | { error: "rate_limit_error" }
  | { error: "invalid_name" }
  | { error: "invalid_display_name" }
  | { error: "invalid_matrix_id" }
  | { error: "invalid_post_title" }
  | { error: "invalid_body_field" }
  | { error: "bio_length_overflow" }
  | { error: "alt_text_length_overflow" }
  | { error: "missing_totp_token" }
  | { error: "missing_totp_secret" }
  | { error: "incorrect_totp_token" }
  | { error: "couldnt_parse_totp_secret" }
  | { error: "couldnt_generate_totp" }
  | { error: "totp_already_enabled" }
  | { error: "couldnt_like_comment" }
  | { error: "couldnt_save_comment" }
  | { error: "couldnt_create_report" }
  | { error: "couldnt_resolve_report" }
  | { error: "community_moderator_already_exists" }
  | { error: "community_user_already_banned" }
  | { error: "community_block_already_exists" }
  | { error: "community_follower_already_exists" }
  | { error: "couldnt_update_community_hidden_status" }
  | { error: "person_block_already_exists" }
  | { error: "user_already_exists" }
  | { error: "token_not_found" }
  | { error: "couldnt_like_post" }
  | { error: "couldnt_save_post" }
  | { error: "couldnt_mark_post_as_read" }
  | { error: "couldnt_hide_post" }
  | { error: "couldnt_update_community" }
  | { error: "couldnt_update_replies" }
  | { error: "couldnt_update_person_mentions" }
  | { error: "post_title_too_long" }
  | { error: "couldnt_create_post" }
  | { error: "couldnt_create_private_message" }
  | { error: "couldnt_update_private" }
  | { error: "system_err_login" }
  | { error: "couldnt_set_all_registrations_accepted" }
  | { error: "couldnt_set_all_email_verified" }
  | { error: "banned" }
  | { error: "blocked_url" }
  | { error: "couldnt_get_comments" }
  | { error: "couldnt_get_posts" }
  | { error: "invalid_url" }
  | { error: "email_send_failed" }
  | { error: "slurs" }
  | { error: "couldnt_find_object" }
  | { error: "registration_denied"; message: string | null }
  | { error: "federation_disabled" }
  | { error: "domain_blocked"; message: string }
  | { error: "domain_not_in_allow_list"; message: string }
  | { error: "federation_disabled_by_strict_allow_list" }
  | { error: "site_name_required" }
  | { error: "site_name_length_overflow" }
  | { error: "permissive_regex" }
  | { error: "invalid_regex" }
  | { error: "captcha_incorrect" }
  | { error: "couldnt_create_audio_captcha" }
  | { error: "invalid_url_scheme" }
  | { error: "couldnt_send_webmention" }
  | { error: "contradicting_filters" }
  | { error: "instance_block_already_exists" }
  | { error: "too_many_items" }
  | { error: "community_has_no_followers" }
  | { error: "ban_expiration_in_past" }
  | { error: "invalid_unix_time" }
  | { error: "invalid_bot_action" }
  | { error: "cant_block_local_instance" }
  | { error: "url_without_domain" }
  | { error: "inbox_timeout" }
  | { error: "oauth_authorization_invalid" }
  | { error: "oauth_login_failed" }
  | { error: "oauth_registration_closed" }
  | { error: "couldnt_delete_oauth_provider" }
  | { error: "unknown"; message: string };
