export default async function getFormDataFromRequest(request) {
  return Object.fromEntries(await request.formData());
}
