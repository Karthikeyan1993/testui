interface Column {
  prop: string;
  displayName: string;
  width?: number;
}

interface Game {
  title: string;
  url: string;
  platform: string;
  score: string;
  genre: string;
  editors_choice: string;
  release_year: string;
}

interface FilterValueChangeEvent{
  prop: string;
  value: string;
}

interface PaginationPageChangeEvent{
  page: number;
  itemPerPage: number;
}

export { Column, Game , FilterValueChangeEvent, PaginationPageChangeEvent };
