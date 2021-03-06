package com.ssafy.vue.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.dto.HouseDealDto;
import com.ssafy.vue.dto.HouseInfoDto;
import com.ssafy.vue.dto.SidoGugunCodeDto;
import com.ssafy.vue.service.HouseMapService;

@RestController
@RequestMapping("/map")
@CrossOrigin("*")
public class HouseMapController {
	
	private final Logger logger = LoggerFactory.getLogger(HouseMapController.class);

	@Autowired
	private HouseMapService houseMapService;
	
	@GetMapping("/sido")
	public ResponseEntity<List<SidoGugunCodeDto>> sido() throws Exception {
		logger.debug("sido : {}", houseMapService.getSido());
		return new ResponseEntity<List<SidoGugunCodeDto>>(houseMapService.getSido(), HttpStatus.OK);
	}
	
	@GetMapping("/gugun")
	public ResponseEntity<List<SidoGugunCodeDto>> gugun(@RequestParam("sido") String sido) throws Exception {
		logger.debug("gugun : {}", houseMapService.getGugunInSido(sido));
		return new ResponseEntity<List<SidoGugunCodeDto>>(houseMapService.getGugunInSido(sido), HttpStatus.OK);
	}
	
	@GetMapping("/dong")
	public ResponseEntity<List<HouseInfoDto>> dong(@RequestParam("gugun") String gugun) throws Exception {
		return new ResponseEntity<List<HouseInfoDto>>(houseMapService.getDongInGugun(gugun), HttpStatus.OK);
	}
	
	@GetMapping("/apt")
	public ResponseEntity<List<HouseInfoDto>> apt(@RequestParam("dong") String dong) throws Exception {
		return new ResponseEntity<List<HouseInfoDto>>(houseMapService.getAptInDong(dong), HttpStatus.OK);
	}
	
	@GetMapping("/hit/{aptcode}")
	public ResponseEntity<String> countUpHouse(@PathVariable long aptcode) throws Exception {
		logger.debug("countUpNotice - ??????");
		if (houseMapService.countUpHouse(aptcode)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		}
		return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/popular")
	public ResponseEntity<List<HouseInfoDto>> apt() throws Exception {
		logger.debug("popularHouse : {}", houseMapService.popularHouse());
		return new ResponseEntity<List<HouseInfoDto>>(houseMapService.popularHouse(), HttpStatus.OK);
	}
	
	@GetMapping("/deal")
	public ResponseEntity<List<HouseDealDto>> deal(@RequestParam("aptCode") long aptCode) throws Exception {
		return new ResponseEntity<List<HouseDealDto>>(houseMapService.getAptDeal(aptCode), HttpStatus.OK);
	}
	
	@GetMapping("/new")
	public ResponseEntity<List<HouseInfoDto>> newDeal() throws Exception {
		logger.debug("getNewDeal : {}", houseMapService.getNewDeal());
		return new ResponseEntity<List<HouseInfoDto>>(houseMapService.getNewDeal(), HttpStatus.OK);
	}
	
	@GetMapping("/detail")
	public ResponseEntity<HouseInfoDto> detail(@RequestParam("aptCode") long aptCode) throws Exception {
		return new ResponseEntity<HouseInfoDto>(houseMapService.getAptDetail(aptCode), HttpStatus.OK);
	}
	
}
