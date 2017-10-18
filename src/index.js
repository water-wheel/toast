/**
 * Created by David Feng<sublime3@163.com>.
 * ComponentName Toast
 * Desc toast 提示
 * GroupName water-wheel
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import './index.scss'

const DEFAULT_DURATION = 3000;
const NOOP = args => args;

/**
 * @class Toast
 * @extends React.Component
 * @desc Toast Component for mobile
 */
export default class Toast extends Component {

    static propTypes = {
        /**
         * 开关
         */
        open: PropTypes.bool.isRequired,
        /**
         * 主内容
         */
        content: PropTypes.string.isRequired,
        /**
         * 请求关闭回调
         */
        onRequestClose: PropTypes.func.isRequired,
        /**
         * 展示时间
         */
        duration: PropTypes.number,
        /**
        * 自定义属性
        */
        styles: PropTypes.object
    };

    static defaultProps = {
        duration: DEFAULT_DURATION,
        onRequestClose: NOOP,
        styles: {}
    };

    /**
     * @constructor
     */
    constructor(props) {
        super(props);
        this.openTimer = undefined;
    }

    componentDidMount() {
        this.props.open && this.setHideTimer();
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.open && this.setHideTimer();
    }

    setHideTimer() {
        const { duration, onRequestClose } = this.props;
    
        this.openTimer && clearTimeout(this.openTimer);
        this.openTimer = setTimeout(onRequestClose, duration);
    }
    
    componentWillUnmount() {
        this.openTimer && clearTimeout(this.openTimer);
    }

    render () {
        const { open, content, styles } = this.props;

        let modelClass = open ? "lm-ui-model" : "lm-ui-model hide-model";

        return (

            <div className={ modelClass } style={ styles || {} }>
                
                {
                open ? (
                    <div className="lm-ui-toast toast-text-content">
                        <p>{content}</p>
                    </div>
                    ) : null
                }

            </div>

        )
    }

}
