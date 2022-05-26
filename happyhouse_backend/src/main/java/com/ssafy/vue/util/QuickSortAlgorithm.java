//package com.ssafy.vue.util;
//
//import java.util.List;
//
//import com.ssafy.happyhouse.model.HouseInfoDto;
//
//public class QuickSortAlgorithm {
//
//	private static String sort;
//	private static String order;
//
//	public static void doSort(List<HouseInfoDto> list, String sortType, String orderType) {
//		sort = sortType;
//		order = orderType;
//		quickSort(list, 0, list.size() - 1);
//	}
//
//	private static void quickSort(List<HouseInfoDto> list, int start, int end) {
//		int part = partition(list, start, end);
//		if (start < part - 1)
//			quickSort(list, start, part - 1);
//		if (end > part)
//			quickSort(list, part, end);
//	}
//
//	private static int partition(List<HouseInfoDto> list, int start, int end) {
//		HouseInfoDto dto = list.get((start + end) / 2);
//		if (sort.equals("byname")) {
//			if (order.equals("asc")) {
//				while (start <= end) {
//					while (list.get(start).getAptName().compareTo(dto.getAptName()) < 0)
//						start++;
//					while (list.get(end).getAptName().compareTo(dto.getAptName()) > 0)
//						end--;
//					if (start <= end) {
//						swap(list, start, end);
//						start++;
//						end--;
//					}
//				}
//			} else if (order.equals("desc")) {
//				while (start <= end) {
//					while (list.get(start).getAptName().compareTo(dto.getAptName()) > 0)
//						start++;
//					while (list.get(end).getAptName().compareTo(dto.getAptName()) < 0)
//						end--;
//					if (start <= end) {
//						swap(list, start, end);
//						start++;
//						end--;
//					}
//				}
//			}
//		} else if (sort.equals("byyear")) {
//			if (order.equals("asc")) {
//				while (start <= end) {
//					while (list.get(start).getBuildYear() < dto.getBuildYear())
//						start++;
//					while (list.get(end).getBuildYear() > dto.getBuildYear())
//						end--;
//					if (start <= end) {
//						swap(list, start, end);
//						start++;
//						end--;
//					}
//				}
//			} else if (order.equals("desc")) {
//				while (start <= end) {
//					while (list.get(start).getBuildYear() > dto.getBuildYear())
//						start++;
//					while (list.get(end).getBuildYear() < dto.getBuildYear())
//						end--;
//					if (start <= end) {
//						swap(list, start, end);
//						start++;
//						end--;
//					}
//				}
//			}
//		} else if (sort.equals("byprice")) {
//			if (order.equals("asc")) {
//				while (start <= end) {
//					while (list.get(start).getRecentPrice().compareTo(dto.getRecentPrice()) < 0)
//						start++;
//					while (list.get(end).getRecentPrice().compareTo(dto.getRecentPrice()) > 0)
//						end--;
//					if (start <= end) {
//						swap(list, start, end);
//						start++;
//						end--;
//					}
//				}
//			} else if (order.equals("desc")) {
//				while (start <= end) {
//					while (list.get(start).getRecentPrice().compareTo(dto.getRecentPrice()) > 0)
//						start++;
//					while (list.get(end).getRecentPrice().compareTo(dto.getRecentPrice()) < 0)
//						end--;
//					if (start <= end) {
//						swap(list, start, end);
//						start++;
//						end--;
//					}
//				}
//
//			}
//		}
//		return start;
//	}
//
//	private static void swap(List<HouseInfoDto> list, int start, int end) {
//		HouseInfoDto tmp = list.get(start);
//		list.set(start, list.get(end));
//		list.set(end, tmp);
//		return;
//	}
//}
