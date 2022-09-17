function readForm(data: any): FormData
{
    const form = new FormData();

    Object.keys(data).forEach((value: any) => {
        form.append(`${value}`, `${data[value]}`);
    });

    return form;
}

export default readForm;