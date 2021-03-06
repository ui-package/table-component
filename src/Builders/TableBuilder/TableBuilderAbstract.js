import TableBuilderInterface from './TableBuilderInterface'
import TableFacade from '../../Facades/TableFacade'
import RenderManager from '../../Models/RenderManager/RenderManager'
import {TABLE_BUILD_DEFAULT} from './constants';

export default class TableBuilderAbstract extends TableBuilderInterface {
  /**
   * @param onRender {Function}
   */
  constructor(onRender) {
    super()
    /**
     * @protected
     */
    this._columnManager = null
    /**
     * @protected
     */
    this._renderManager = new RenderManager(onRender)
    /**
     * @protected
     */
    this._facade = this.createFacade()
  }
  buildDefaultDensity (facade) {
    if (facade.getDensityManager() === null) {
      this.buildDensityManager(TABLE_BUILD_DEFAULT)
    }
  }
  buildDefaultPaginationManager (facade) {
    if (facade.getPaginationManager() === null) {
      this.buildPaginationManager(TABLE_BUILD_DEFAULT)
    }
  }
  buildDefaultSortManager (facade) {
    if (facade.getSortManager() === null) {
      this.buildSortManager(TABLE_BUILD_DEFAULT)
    }
  }
  buildDefaultResetManager (facade) {
    if (facade.getResetManager() === null) {
      this.buildResetManager(TABLE_BUILD_DEFAULT)
    }
  }
  buildDefaultDataSelectorManager (facade) {
    if (facade.getDataSelectorManager() === null) {
      this.buildChooseManager(TABLE_BUILD_DEFAULT)
    }
  }
  /**
   * @return {TableFacadeAbstract}
   */
  getTableFacade () {
    const facade = this.getFacade()
    this.buildDefaultDensity(facade)
    this.buildDefaultPaginationManager(facade)
    this.buildDefaultDataSelectorManager(facade)
    this.buildDefaultResetManager(facade)
    this.buildDefaultSortManager(facade)
    return facade
  }
  /**
   * @protected
   * @return {TableFacade}
   */
  createFacade () {
    const facade = new TableFacade()
    facade.setRenderManager(this.getRenderManager())
    facade.setColumnManager(this.getColumnManager())
    return facade
  }
  /**
   * @protected
   * @return {TableFacade}
   */
  getFacade () {
    return this._facade
  }
  /**
   * @protected
   * @return {RenderManagerInterface}
   */
  getRenderManager () {
    return this._renderManager
  }
  /**
   * @protected
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {
    return this._columnManager
  }
  /**
   * @protected
   * @param columnManager {ColumnManagerInterface}
   */
  setColumnManager (columnManager) {
    this._columnManager = columnManager
    this._facade.setColumnManager(this._columnManager)
  }
}
