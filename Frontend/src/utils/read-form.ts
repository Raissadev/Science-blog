function build(formData: any, data: any, parentKey: any = null): any
{
    if (data && typeof data === 'object' &&
        !(data instanceof Date) && !(data instanceof File)
    ) {
        Object.keys(data).forEach((key) => {
            build(
                formData,
                data[key],
                parentKey ? `${parentKey}[${key}]` : key,
            );
        });
    } else {
        const value = data == null ? '' : data;

        formData.append(parentKey, value);
    }
}

const readForm = (data: any): FormData => {
    const formData = new FormData();

    build(formData, data);

    return formData;
};

export default readForm;