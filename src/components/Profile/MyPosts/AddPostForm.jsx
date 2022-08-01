import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControll } from "../../FormsComponents/FormControll";
import s from './MyPosts.module.sass';

const Textarea = FormControll('textarea')

const AddPostForm = (props) => {

    const {invalid, submitting, pristine } = props

    return (

        <form onSubmit={props.handleSubmit} className={s.Posts__wrap}>
            <Field className={s.Posts__wrap__send} component={Textarea} name='postText' placeholder="start to writing....."/>
            <button type="submit" disabled={invalid || pristine || submitting} className={s.Posts__btn}>Add post</button>
        </form>
    )
}

export default reduxForm ({form: 'AddPostForm'}) (AddPostForm)