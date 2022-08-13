import ErrorLayout from 'components/layout/ErrorLayout';

function Custom500() {
  return (
    <ErrorLayout
      title="Internal Server Error"
      subTitle="Sorry, there's internal server error."
    />
  );
}

export default Custom500;
