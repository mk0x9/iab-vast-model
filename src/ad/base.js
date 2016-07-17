import {SortedList} from '../util/sorted-list'
import {SortedListItem} from '../util/sorted-list-item'

/**
 * Base class for ads.
 *
 * @class Ad
 * @abstract
 * @extends SortedListItem
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Ad extends SortedListItem {
  constructor () {
    super()
    this._creatives = new SortedList()
    this._impressions = []
    this._extensions = []
  }

  /**
   * The ID of this ad.
   *
   * @type {string}
   */
  get id () {
    return this._id
  }

  set id (value) {
    this._id = value
  }

  /**
   * The ad system for this ad.
   *
   * @type {AdSystem}
   */
  get adSystem () {
    return this._adSystem
  }

  set adSystem (value) {
    this._adSystem = value
  }

  /**
   * The creatives for this ad.
   *
   * @type {SortedList}
   * @readonly
   */
  get creatives () {
    return this._creatives
  }

  /**
   * The impression tracking configurations for this ad.
   *
   * @type {Impression[]}
   * @readonly
   */
  get impressions () {
    return this._impressions
  }

  /**
   * The error tracking URI for this ad.
   *
   * @type {string}
   */
  get error () {
    return this._error
  }

  set error (value) {
    this._error = value
  }

  /**
   * The extensions for this ad.
   *
   * @type {Extension[]}
   * @readonly
   */
  get extensions () {
    return this._extensions
  }
}