import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./icons.scss"


export default class Icon extends ReactComponent {
    static   PropTypes = {
        border: PropTypes.bool,
        className: PropTypes.string,
        fixedWidth: PropTypes.bool,
        flip: PropTypes.oneOf(['horizontal', 'vertical']),
        inverse: PropTypes.bool,
        name: PropTypes.string.isRequired,
        pulse: PropTypes.bool,
        rotate: PropTypes.oneOf([90, 180, 270]),
        size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
        spin: PropTypes.bool,
        stack: PropTypes.oneOf(['1x', '2x']),
    };

    render() {
        // classes
        const componentClass = cx(
            styles.fa,
            styles['fa-' + this.props.name],
            this.props.size && styles['fa-' + this.props.size],
            this.props.fixedWidth && styles['fa-' + this.props.fixedWidth],
            this.props.inverse && styles['fa-' + this.props.inverse],
            this.props.flip && styles['fa-flip' + this.props.flip],
            this.props.rotate && styles['fa-rotate-' + this.props.rotate],
            this.props.stack && styles['fa-' + this.props.stack],
            {
                'fa-border': this.props.border,
                'fa-pulse': this.props.pulse,
                'fa-spin': this.props.spin,
            },
            this.props.className
        );

        return (
            <i
                className={componentClass}
            />
        )
    }
}
