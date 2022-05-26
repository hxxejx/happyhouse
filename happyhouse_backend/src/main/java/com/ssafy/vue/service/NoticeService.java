package com.ssafy.vue.service;

import java.util.List;
import java.util.Map;

import com.ssafy.vue.dto.NoticeDto;
import com.ssafy.vue.util.PageNavigation;

public interface NoticeService {

	boolean registerArticle(NoticeDto notice);

	List<NoticeDto> listArticle(/* Map<String, String> map */);

	PageNavigation makePageNavigation(Map<String, String> map);

	NoticeDto getArticle(int articleNo);

	boolean updateArticle(NoticeDto notice);

	void deleteArticle(int articleNo, String path);

	List<NoticeDto> search(int articleNo);

	NoticeDto detailNotice(int articleno);

	boolean countUpNotice(int articleno);

	boolean deleteNotice(int articleno);

	List<NoticeDto> searchNoticeByNo(int articleno);

	List<NoticeDto> searchNoticeBySubject(String subject);

}
