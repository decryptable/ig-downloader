/**
 * Represents pagination information used to navigate through a list of items.
 * This interface provides details about the current pagination state, such as
 * whether there are more items to load and the position to resume loading.
 */
export interface PageInfo {
  /**
   * Indicates whether there is a subsequent page of items available.
   * If `true`, more items can be fetched; otherwise, the end of the list has been reached.
   * @type {boolean}
   */
  has_next_page: boolean;

  /**
   * The cursor pointing to the end of the current page of items.
   * This cursor can be used to fetch the next page. It will be `null` if there are no more pages.
   * @type {null | string}
   */
  end_cursor: null | string;
}
