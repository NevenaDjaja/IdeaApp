import React, { PropTypes, Component } from 'react';
import styles from './IdeaForm.css';
import {
  Form,
  FormGroup,
  FormControl,
  Col,
  Button,
  ControlLabel
} from 'react-bootstrap';

class IdeaForm extends Component {
	static propTypes = {}
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		this.props.handleChange(e);
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit(e);
	}

	render() {
		return (
			<div className={styles.ideaForm}>
				<Form horizontal
          className={styles.form}
          onSubmit={this.onSubmit}
        >
          <FormGroup
						bsSize="large"
						controlId="formControlsTextarea"
					>
            <Col>
              <FormControl
                componentClass="textarea"
								className={styles.textarea}
								value={this.state.value}
								onChange={this.onChange}
								placeholder='Jot down your ideas before they go away'
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Button
                bsSize="lg"
                type="submit"
                className={styles.submit}
              >
                Add Idea
              </Button>
            </Col>
          </FormGroup>
        </Form>
			</div>
		)
	}
}
module.exports = IdeaForm;
