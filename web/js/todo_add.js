var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';

/**
 * props:
 *
 *  {
 *      onAdd: Function(input),
 *      onInvalidInput: Function()
 *  }
 *
 */
var TodoAdd = function (_React$Component) {
    _inherits(TodoAdd, _React$Component);

    function TodoAdd(props) {
        _classCallCheck(this, TodoAdd);

        var _this = _possibleConstructorReturn(this, (TodoAdd.__proto__ || Object.getPrototypeOf(TodoAdd)).call(this, props));

        _this.state = {
            input: null
        };
        return _this;
    }

    _createClass(TodoAdd, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Type a new todo item",
                        value: this.state.value,
                        onChange: function onChange(event) {
                            _this2.setState({ input: event.target.value });
                        }
                    })
                ),
                React.createElement(
                    "button",
                    {
                        type: "submit",
                        className: "btn btn-default",
                        onClick: function onClick() {
                            var input = _this2.state.input;
                            // Validate
                            if (input && input.trim().length > 0) {
                                _this2.props.onAdd(input);
                            } else {
                                _this2.props.onInvalidInput();
                            }
                        } },
                    "Add"
                )
            );
        }
    }]);

    return TodoAdd;
}(React.Component);