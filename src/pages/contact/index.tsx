import Styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';

export default function Contact () {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (_data: any) => {};

    return (
        <section className={Styles.formContainer}>

            <article className={Styles.formContainer__side}>
                <h3 className={Styles.formContainer__side__subTitle}>contact</h3>
                <h2 className={Styles.formContainer__side__title}>Get in touch — let&rsquo;s work together.</h2>
            </article>
            
            <article className={Styles.formContainer__header}>
                <h1 className={Styles.formContainer__header__title}>Got a project? Drop me a line if you want to work together on something exciting. Big or small. Mobile or web.</h1>
            </article>

            <article id='wrapper' className={Styles.formContainer__wrapper}>
                <form 
                    className={Styles.form}
                    action="https://api.sheetmonkey.io/form/qAPGBQpdud59bjCuFamCi1"
                    method="post" // default to post
                    onSubmit={() => {}} // function to be called before the request
                >

                    <div className={Styles.form__field}>
                        <label 
                            className={Styles.form__field__label} 
                            htmlFor='name'
                        >
                            Name*
                        </label>

                        <input 
                            className={errors?.name && "input-error"}
                            id='name'
                            type='text'
                            {...register('name', {required: true})}
                        />
                        {errors?.name?.type === 'required' && <p className={Styles.error__message}>Name is required</p>}
                    </div>

                    <div className={Styles.form__field}>
                        <label 
                            className={Styles.form__field__label} 
                            htmlFor='email'
                        >
                            E-mail*
                        </label>

                        <input 
                            className={errors?.name && "input-error"}
                            id='email' 
                            type='email'
                            {...register('email', {required: true, pattern: /@/ })} 
                        />
                        {errors?.email?.type === 'required' && <p className={Styles.error__message}>E-mail is required</p>}
                        {errors?.email?.type === 'pattern' && <p className={Styles.error__message}> Please insert an valid e-mail</p>}
                    </div>

                    <div className={Styles.form__field}>
                        <label 
                            className={Styles.form__field__label} 
                            htmlFor='message'
                        >
                            Message*
                        </label>

                        <textarea 
                            className={errors?.name && "input-error"}
                            id='message' 
                            required
                            {...register('message', {required: true})} 
                        >
                        </textarea>
                        {errors?.message?.type === 'required' && <p className={Styles.error__message}>Message is required</p>}

                    </div>

                    <div className={Styles.form__checkbox}>
                        <div className={Styles.form__checkbox__wrapper}>
                            <input 
                            className={errors?.name && "checkbox-error"}
                            id='privacy-policy' 
                            type="checkbox" 
                            required
                            {...register('privacyPolicy', {required: true})} 
                            />

                            <label htmlFor="privacy-policy">
                                *By submitting below, I consent to allow Leonardo Valdetaro to process my personal information submitted above to provide me with the content requested.
                            </label>
                            {errors?.privacyPolicy?.type === 'required' && <p className={Styles.error__message}>Please, you must agree the privacy policy.</p>}

                        </div>
                    </div>

                    <div className={Styles.field__button}>
                        <button 
                            className={Styles.button}
                            onClick={() => handleSubmit(onSubmit)()}
                        >
                            Send Message
                        </button>
                    </div>

                </form>
            </article>
        </section>
    );
}