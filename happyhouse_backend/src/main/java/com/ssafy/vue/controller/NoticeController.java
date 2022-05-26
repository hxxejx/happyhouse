package com.ssafy.vue.controller;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ssafy.vue.dto.Board;
import com.ssafy.vue.dto.FileInfoDto;
import com.ssafy.vue.dto.MemberDto;
import com.ssafy.vue.dto.NoticeDto;
import com.ssafy.vue.service.NoticeService;
import com.ssafy.vue.util.PageNavigation;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/notice")
public class NoticeController {

	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private NoticeService noticeService;

	@Autowired
	ResourceLoader resLoader;

//	@GetMapping("/register")
//	public String register(@RequestBody NoticeDto notice) {
//		return "notice/write";
//	}

	@ApiOperation(value = "새로운 게시글 정보를 입력한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping /* ("/register") */
	public ResponseEntity<String> register(
			@RequestBody NoticeDto notice/*
											 * , @RequestParam("upfile") MultipartFile[] files, Model model, HttpSession
											 * session, RedirectAttributes redirectAttributes
											 */) {
//		MemberDto memberDto = (MemberDto) session.getAttribute("userinfo");
//		notice.setUserid(memberDto.getUserid());

//		if (!files[0].isEmpty()) {
//			Resource res = resLoader.getResource("classpath:static/upload");
//			String canonicalPath = res.getFile().getCanonicalPath();
//			logger.debug("file upload canonical path : {}", canonicalPath);
//			String today = new SimpleDateFormat("yyMMdd").format(new Date());
//			String saveFolder = canonicalPath + File.separator + today;
//			File folder = new File(saveFolder);
//			if (!folder.exists())
//				folder.mkdirs();
//			List<FileInfoDto> fileInfos = new ArrayList<FileInfoDto>();
//			for (MultipartFile mfile : files) {
//				FileInfoDto fileInfoDto = new FileInfoDto();
//				String originalFileName = mfile.getOriginalFilename();
//				if (!originalFileName.isEmpty()) {
//					String saveFileName = System.nanoTime()
//							+ originalFileName.substring(originalFileName.lastIndexOf('.'));
//					fileInfoDto.setSaveFolder(today);
//					fileInfoDto.setOriginFile(originalFileName);
//					fileInfoDto.setSaveFile(saveFileName);
//					mfile.transferTo(new File(folder, saveFileName));
//				}
//				fileInfos.add(fileInfoDto);
//			}
//			notice.setFileinfos(fileInfos);
//		}

//		noticeService.registerArticle(notice);
//		redirectAttributes.addAttribute("pg", 1);
//		redirectAttributes.addAttribute("key", "");
//		redirectAttributes.addAttribute("word", "");
//		redirectAttributes.addFlashAttribute("msg", "글이 게시되었습니다!");
		logger.debug("register - 호출");
		if (noticeService.registerArticle(notice)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
//		return "redirect:/notice/list";
	}
	
	@ApiOperation(value = "모든 게시글의 정보를 반환한다.", response = List.class)
	@GetMapping /* ("/list") */
	public ResponseEntity<List<NoticeDto>> listNotice(/* @RequestParam Map<String, String> map */) {
//		ModelAndView mav = new ModelAndView();
//		String spp = map.get("spp");
//		map.put("spp", spp != null ? spp : "10");
//		List<NoticeDto> list = noticeService.listArticle(map);
//		PageNavigation pageNavigation = noticeService.makePageNavigation(map);
//		mav.addObject("articles", list);
//		mav.addObject("navigation", pageNavigation);
//		mav.addObject("key", map.get("key"));
//		mav.addObject("word", map.get("word"));
//		mav.setViewName("notice/list");
//		return mav;
		logger.debug("listNotice - 호출");
		return new ResponseEntity<List<NoticeDto>>(noticeService.listArticle(), HttpStatus.OK);
	}
	
	@ApiOperation(value = "글번호에 해당하는 게시글의 정보를 반환한다.", response = NoticeDto.class)
	@GetMapping("{articleno}")
	public ResponseEntity<NoticeDto> detailNotice(@PathVariable int articleno) {
		logger.debug("detailNotice - 호출");
		return new ResponseEntity<NoticeDto>(noticeService.detailNotice(articleno), HttpStatus.OK);
	}
//
//	@GetMapping("/modify")
//	public ModelAndView modify(@RequestParam("articleno") int articleNo) throws Exception {
//		ModelAndView mav = new ModelAndView();
//		NoticeDto guestBookDto = noticeService.getArticle(articleNo);
//		mav.addObject("article", guestBookDto);
//		mav.setViewName("notice/modify");
//		return mav;
//	}
//
//	@PostMapping("/modify")
//	public String modify(NoticeDto guestBookDto, Model model, RedirectAttributes redirectAttributes) throws Exception {
//		noticeService.updateArticle(guestBookDto);
//		redirectAttributes.addAttribute("pg", 1);
//		redirectAttributes.addAttribute("key", "");
//		redirectAttributes.addAttribute("word", "");
//		redirectAttributes.addFlashAttribute("msg", "글이 수정되었습니다!");
//		return "redirect:/notice/list";
//	}
	@ApiOperation(value = "글번호에 해당하는 게시글의 정보를 수정한다. 그리고 DB수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("{articleno}")
	public ResponseEntity<String> updateNotice(@RequestBody NoticeDto notice) {
		logger.debug("updateNotice - 호출");
		logger.debug("" + notice);

		if (noticeService.updateArticle(notice)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "글번호에 해당하는 게시글의 조회수를 증가시킨다.", response = NoticeDto.class)
	@GetMapping("/hit/{articleno}")
	public ResponseEntity<String> countUpNotice(@PathVariable int articleno) {
		logger.debug("countUpNotice - 호출");
		if (noticeService.countUpNotice(articleno)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
//
//	@GetMapping("/delete")
//	public String delete(@RequestParam("articleno") int articleNo, Model model, RedirectAttributes redirectAttributes)
//			throws Exception {
//		Resource res = resLoader.getResource("classpath:static/upload");
//		String canonicalPath = res.getFile().getCanonicalPath();
//		noticeService.deleteArticle(articleNo, canonicalPath);
//		redirectAttributes.addAttribute("pg", 1);
//		redirectAttributes.addAttribute("key", "");
//		redirectAttributes.addAttribute("word", "");
//		redirectAttributes.addFlashAttribute("msg", "글이 삭제되었습니다!");
//		return "redirect:/notice/list";
//	}
	
	@ApiOperation(value = "글번호에 해당하는 게시글의 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("{articleno}")
	public ResponseEntity<String> deleteNotice(@PathVariable int articleno) {
		logger.debug("deleteNotice - 호출");
		if (noticeService.deleteNotice(articleno)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
//
//	@RequestMapping("/download")
//	@ResponseBody
//	public ResponseEntity<Resource> download(@RequestParam Map<String, Object> param, HttpServletRequest request)
//			throws IOException {
//		Resource res = resLoader.getResource("classpath:static/upload");
//		String canonicalPath = res.getFile().getCanonicalPath();
//		String filePath = canonicalPath + File.separator + param.get("sfolder") + File.separator + param.get("sfile");
//		File target = new File(filePath);
//		HttpHeaders header = new HttpHeaders();
//		Resource rs = null;
//		if (target.exists()) {
//			try {
//				String mimeType = Files.probeContentType(Paths.get(target.getAbsolutePath()));
//				if (mimeType == null) {
//					mimeType = "apllication/download; charset=UTF-8";
//				}
//				rs = new UrlResource(target.toURI());
//				String userAgent = request.getHeader("User-Agent");
//				boolean isIE = userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1;
//				String fileName = null;
//				String originalFile = (String) param.get("ofile");
//				if (isIE) {
//					fileName = URLEncoder.encode(originalFile, "UTF-8").replaceAll("\\+", "%20");
//				} else {
//					fileName = new String(originalFile.getBytes("UTF-8"), "ISO-8859-1");
//				}
//				header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"");
//				header.setCacheControl("no-cache");
//				header.setContentType(MediaType.parseMediaType(mimeType));
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//		return new ResponseEntity<Resource>(rs, header, HttpStatus.OK);
//	}
//
//	@GetMapping("/search/{ano}")
//	@ResponseBody
//	public ResponseEntity<?> search(@PathVariable("ano") int articleNo) {
//		List<NoticeDto> noticeDtos = null;
//		NoticeDto noticeDto = null;
//		try {
//			noticeDtos = noticeService.search(articleNo);
//			noticeDto = noticeDtos.get(0);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return new ResponseEntity<NoticeDto>(noticeDto, HttpStatus.OK);
//	}
	@ApiOperation(value = "글번호에 해당하는 게시글의 정보를 검색한다.", response = List.class)
	@GetMapping("/search/no/{articleno}")
	public ResponseEntity<List<NoticeDto>> searchNoticeByNo(@PathVariable int articleno) {
		logger.debug("searchNoticeByNo - 호출");
		return new ResponseEntity<List<NoticeDto>>(noticeService.searchNoticeByNo(articleno), HttpStatus.OK);
	}
	
	@ApiOperation(value = "입력 단어를 포함한 제목을 가진 게시글의 정보를 검색한다.", response = List.class)
	@GetMapping("/search/subject/{subject}")
	public ResponseEntity<List<NoticeDto>> searchNoticeBySubject(@PathVariable String subject) {
		logger.debug("searchNoticeBySubject - 호출");
		return new ResponseEntity<List<NoticeDto>>(noticeService.searchNoticeBySubject(subject), HttpStatus.OK);
	}

}
