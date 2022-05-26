//package com.ssafy.vue.util;
//
//import java.util.List;
//
//import com.ssafy.happyhouse.model.HouseInfoDto;
//
//public class BinarySearchAlgorithm {
//	public static void doSearch(List<HouseInfoDto> list, int minPrice, int maxPrice) {
//		String min = Integer.toString(minPrice);
//		String max = Integer.toString(maxPrice);
//		int minIndex = 0;
//		int mid = 0;
//		int low = 0, high = list.size()-1;
//		
//		boolean find = false;
//		
//		while(low <= high) {
//			mid = (low + high) / 2;
//			if(list.get(mid).getRecentPrice().compareTo(min) < 0) {
//				low = mid + 1;
//			} else if(list.get(mid).getRecentPrice().compareTo(min) > 0) {
//				high = mid - 1;
//			} else {
//				minIndex = mid;
//				find = true;
//				break;
//			}
//		}
//		
//		if(!find) {
//			minIndex = high;
//		}
//		
//		int maxIndex = 0;
//		mid = 0;
//		low = 0;
//		high = list.size()-1;
//		find = false;
//		
//		while(low <= high) {
//			mid = (low + high) / 2;
//
//			if(list.get(mid).getRecentPrice().compareTo(max) > 0) {
//				low = mid + 1;
//			} else if(list.get(mid).getRecentPrice().compareTo(max) < 0) {
//				high = mid - 1;
//			} else {
//				maxIndex = mid;
//				find = true;
//				break;
//			}
//		}
//		
//		if(!find) {
//			maxIndex = low;
//		}
//		
//		for (int i = 0; i < minIndex; i++) {
//			list.remove(i);
//		}
//		
//		int size = list.size()-1;
//		for (int i = maxIndex; i < size; i++) {
//			list.remove(i);
//		}
//	}
//}
