export class APICaller{
    static async get() {
        try {
          const response = await axios.get('http://localhost:3000/products');
          return response.data
        } catch (error) {
          console.error(error);
        }
      }
    static async Add(data) {
        try {
          await axios.post('http://localhost:3000/categories',data);
          console.log("Thêm thành công ^-^");
        } catch (error) {
          console.error(error);
        }
    } 
    static async getlastId(){
        try {
            const response = axios.get('http://localhost:3000/categories');
            return response.data[response.data.length -1].id
        } catch (error) {
            console.error(error);
        }      
    }
    static async DeleteCate(id){
      try {
        await axios.delete(`http://localhost:3000/categories/${id}`)
        console.log('Xóa thành công');
      } catch (error) {
        console.error(error);
      }
    }
    static async getCateById(id){
      try {
        const response = await axios.get(`http://localhost:3000/categories/${id}`)
        return response.data
      } catch (error) {
        console.error(error);
      }
    }
    static async updateCate(id,data){
      try {
        await axios.put(`http://localhost:3000/categories/${id}`,data)
        console.log('Cập nhật thành công ^-^');
      } catch (error) {
        
      }
    }
    //Product
    static async addPro(data) {
      try {
        await axios.post('http://localhost:3000/products',data);
        console.log("Thêm thành công ^-^");
      } catch (error) {
        console.error(error);
      }
  } 
  static async getlastIdPro(){
      try {
          let response = axios.get('http://localhost:3000/products');
          return response.data[response.data.length -1].id 
      } catch (error) {
          console.error(error);
      }      
  }
  static async Delete(id){
    try {
      await axios.delete(`http://localhost:3000/products/${id}`)
      console.log('Xóa thành công');
    } catch (error) {
      console.error(error);
    }
  }
  static async getProById(id) {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  static async updatePro(id,data){
    try {
      await axios.put(`http://localhost:3000/products/${id}`,data)
      console.log('Cập nhật thành công ^-^');
    } catch (error) {
      
    }
  }
  //Order
  static async getOrderById(id) {
    try {
      const response = await axios.get(`http://localhost:3000/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  static async updateOrder(id,data){
    try {
      await axios.put(`http://localhost:3000/orders/${id}`,data)
      console.log('Cập nhật thành công ^-^');
    } catch (error) {
      
    }
  }
}
