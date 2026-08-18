interface FormValues {
  name: string;
  email: string;
  exam: string;
  date: string;
  platform: string;
  [key: string]: string;
}

export type { FormValues };

export const quotevalidate = (values: FormValues) => {
  if (!values) return {};
  const errors: Partial<FormValues> = {};

  // Name
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
