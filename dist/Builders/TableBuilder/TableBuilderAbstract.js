'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TableBuilderInterface = require('./TableBuilderInterface');

var _TableBuilderInterface2 = _interopRequireDefault(_TableBuilderInterface);

var _TableFacade = require('../../Facades/TableFacade');

var _TableFacade2 = _interopRequireDefault(_TableFacade);

var _RenderManager = require('../../Models/RenderManager/RenderManager');

var _RenderManager2 = _interopRequireDefault(_RenderManager);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBuilderAbstract = function (_TableBuilderInterfac) {
  _inherits(TableBuilderAbstract, _TableBuilderInterfac);

  /**
   * @param onRender {Function}
   * @param columnManager {ColumnManagerInterface}
   */
  function TableBuilderAbstract(onRender, columnManager) {
    _classCallCheck(this, TableBuilderAbstract);

    /**
     * @protected
     */
    var _this = _possibleConstructorReturn(this, (TableBuilderAbstract.__proto__ || Object.getPrototypeOf(TableBuilderAbstract)).call(this));

    _this._columnManager = columnManager;
    /**
     * @protected
     */
    _this._renderManager = new _RenderManager2.default(onRender);
    /**
     * @protected
     */
    _this._facade = _this.createFacade();
    _this.buildSortManager(_constants.TABLE_BUILD_DEFAULT);
    _this.buildResetManager(_constants.TABLE_BUILD_DEFAULT);
    _this.buildPaginationManager(_constants.TABLE_BUILD_DEFAULT);
    _this.buildDensityManager(_constants.TABLE_BUILD_DEFAULT);
    _this.buildChooseManager(_constants.TABLE_BUILD_DEFAULT);
    return _this;
  }
  /**
   * @return {TableFacadeAbstract}
   */


  _createClass(TableBuilderAbstract, [{
    key: 'getTableFacade',
    value: function getTableFacade() {
      return this.getFacade();
    }
    /**
     * @protected
     * @return {TableFacade}
     */

  }, {
    key: 'createFacade',
    value: function createFacade() {
      var facade = new _TableFacade2.default();
      facade.setRenderManager(this.getRenderManager());
      facade.setColumnManager(this.getColumnManager());
      return facade;
    }
    /**
     * @protected
     * @return {TableFacade}
     */

  }, {
    key: 'getFacade',
    value: function getFacade() {
      return this._facade;
    }
    /**
     * @protected
     * @return {RenderManagerInterface}
     */

  }, {
    key: 'getRenderManager',
    value: function getRenderManager() {
      return this._renderManager;
    }
    /**
     * @protected
     * @return {ColumnManagerInterface}
     */

  }, {
    key: 'getColumnManager',
    value: function getColumnManager() {
      return this._columnManager;
    }
  }]);

  return TableBuilderAbstract;
}(_TableBuilderInterface2.default);

exports.default = TableBuilderAbstract;