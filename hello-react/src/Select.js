import styles from './Select.module.css';

import { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleSelectedClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };
  render() {

    console.log('render Select');
    const { items = [], selected = '', onSelected = () => {} } = this.props;
    const { open } = this.state;

    return (
      <div className={styles.Select}>
        <div className={styles.selected} onClick={this.handleSelectedClick}>
          {selected}
        </div>
        {open && (
          <div className={styles.menu}>
            {items.map((it) => <div className={styles.item} key={it} onClick={() => onSelected(it)}>{it}</div>)}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
