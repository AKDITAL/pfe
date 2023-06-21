import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Input,
    Button,
    Checkbox,
    FormItem,
    FormContainer,
    Alert,
} from 'components/ui';
import { PasswordInput, ActionLink } from 'components/shared';
import useTimeOutMessage from 'utils/hooks/useTimeOutMessage';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import useAuth from 'utils/hooks/useAuth';

import translation from './translation.json'; // Importez le fichier de traduction
//import fr from './lang/fr.json';

const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Please enter your user name'),
    password: Yup.string().required('Please enter your password'),
    rememberMe: Yup.bool(),
});

const SignInForm = (props) => {
    const {
        disableSubmit = false,
        className,
        forgotPasswordUrl = '/forgot-password',
        signUpUrl = '/sign-up',
    } = props;

    const [message, setMessage] = useTimeOutMessage();
    const { signIn } = useAuth();
    const { t } = useTranslation('nav', { resources: translation }); // Utilisez la fonction t() avec le namespace 'nav' et les ressources de traduction

    const onSignIn = async (values, setSubmitting) => {
        const { userName, password } = values;
        setSubmitting(true);

        const result = await signIn({ userName, password });

        if (result.status === 'failed') {
            setMessage(result.message);
        }

        setSubmitting(false);
    };

    return (
        <div className={className}>
            {message && (
                <Alert className="mb-4" type="danger" showIcon>
                    {message}
                </Alert>
            )}
            <Formik
                initialValues={{
                    userName: 'admin',
                    password: '123Qwe',
                    rememberMe: true,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    if (!disableSubmit) {
                        onSignIn(values, setSubmitting);
                    } else {
                        setSubmitting(false);
                    }
                }}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <FormItem
                                label={t('userName')}
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="userName"
                                    placeholder={t('appsccv.homepage')}
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label={t('authentication.authentication')}
                                invalid={errors.password && touched.password}
                                errorMessage={errors.password}
                            >
                                <Field
                                    autoComplete="off"
                                    name="password"
                                    placeholder={t('authentication.authentication')}
                                    component={PasswordInput}
                                />
                            </FormItem>
                            <div className="flex justify-between mb-6">
                                <Field
                                    className="mb-0"
                                    name="rememberMe"
                                    component={Checkbox}
                                    children={t('authentication.rememberMe')}
                                />
                                <ActionLink to={forgotPasswordUrl}>
                                    {t('authentication.forgotPassword')}
                                </ActionLink>
                            </div>
                            <Button
                                block
                                loading={isSubmitting}
                                variant="solid"
                                type="submit"
                            >
                                {isSubmitting ? t('authentication.signIn') : t('authentication.signIn')}
                            </Button>
                            <div className="mt-4 text-center">
                                <span>{t('authentication.noAccountYet')} </span>
                                <ActionLink to={signUpUrl}>
                                    {t('authentication.signUp')}
                                </ActionLink>
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignInForm;
