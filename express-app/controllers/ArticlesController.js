export default {
  index: async (request, response) => {
    response.status(200).json({ message: 'jwt валиден' });
  }
}