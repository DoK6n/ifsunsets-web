export type Article = {
  channel_key: string
  channel_seq: number
  board_seq: number
  article_id: string
  headline_info: {
    headline_seq: number
  }
  fixed_yn: 'Y' | 'N'
  title: string
  subtitle: string
  media_thumbnail_url: string | null
  media_count: number
  user_interaction_score_info: {
    view_score: number
    comment_score: number
  }
  create_datetime: number
  update_datetime: number
  /** 'PUBLISHED' */
  article_status_code: string
  user_info: {
    member_no: number
    guid: number
    guid_guest_yn: 'Y' | 'N'
    nickname: string
    profile_img: string
    login_provider_code: string
    status: 'Y' | 'N'
    manager_yn: 'Y' | 'N'
    /** 'staff' */
    grade_code: string
    /** 'staff' */
    channel_grade_code: string
    /** 'GM' */
    grade_badge: string
    grade_badge_color: string
    grade_name: string
    regist_yn: 'Y' | 'N'
    snapshot_user_info: {
      member_no: number
      guid: number
      guid_guest_yn: 'Y' | 'N'
      nickname: string
      profile_img: string
      status: 'Y' | 'N'
      manager_yn: 'Y' | 'N'
      grade_code: string
      channel_grade_code: string
      /** 'GM' */
      grade_badge: string
      grade_badge_color: string
      grade_name: string
      regist_yn: 'Y' | 'N'
    }
  }
  attach_summary_info: {
    image_yn: 'Y' | 'N'
    movie_yn: 'Y' | 'N'
    poll_yn: 'Y' | 'N'
    attach_file_yn: 'Y' | 'N'
    music_yn: 'Y' | 'N'
    script_yn: 'Y' | 'N'
  }
  admin_option_summary_info: {
    notice_cancel_reservation_yn: 'N'
    publish_reservation_yn: 'N'
    /** Array of 'CURRENT' | '... */
    notice_position_code: string[]
    /** 'NOTICE' */
    official_type_code: string
  }
  /** 'EDITOR' */
  view_mode: string
  /** 'ko' */
  source_lang: 'ko'
  /** 'NONE' */
  translation_status: string
  translation_manual_yn: 'Y' | 'N'
  need_translation_yn: 'Y' | 'N' | null
}
