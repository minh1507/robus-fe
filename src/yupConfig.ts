// yupConfig.ts
import * as Yup from 'yup';
import i18n from './i18n';
import StringUtil from './modules/common/util/string.util';

Yup.setLocale({
  mixed: {
    required: ({ label }) => i18n.t('validation.required', { object: StringUtil.firstLetterUppercase(i18n.t(`label.${label}`)) }),
    default: ({ label }) => `${label} is invalid`,
  },
  string: {
    min: ({ label, min }) => `${label} must be at least ${min} characters long`,
    max: ({ label, max }) => `${label} must be at most ${max} characters long`,
    email: ({ label }) => `Please enter a valid email address for ${label}`,
  },
});

export default Yup;
