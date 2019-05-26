import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() {}

  filterForPagination(page: number, pageSize: number, data) {
    const fromCount = (page - 1) * pageSize;
    const toCount = (page - 1) * pageSize + pageSize;
    return data.slice(fromCount, toCount);
  }

  filterDateBooks(filterData, formatOptions) {
    let data = new Object();
    for (let index in filterData) {
      const date = formatDate(
        filterData[index].PublishDate,
        formatOptions,
        'en'
      );
      if (!data.hasOwnProperty(date)) {
        data[date] = new Array();
      }
      if (data.hasOwnProperty(date)) {
        data[date].push(filterData[index].PageCount);
      }
    }
    return data;
  }

  avarageData(data) {
    for (let index in data) {
      let total = 0;
      data[index].forEach(function(value) {
        total += value;
      });
      let avg = total / data[index].length;
      data[index] = avg;
    }
    return data;
  }

  sortOrderForDate(data) {
    let orderData = new Object();
    Object.keys(data)
      .sort((a, b) => {
        return Number(new Date(a)) - Number(new Date(b));
      })
      .forEach(val => {
        orderData[val] = data[val];
      });
    return orderData;
  }
}
