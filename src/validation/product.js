import Joi from "joi";

export const productValidate = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Buộc phải nhập tiêu đề sản phẩm"
  }),
  year: Joi.number().required().min(1).messages({
    "number.min": "năm phải lớn hơn 0",
    "any.required": "Không được để trống năm",
  }),
  description: Joi.string().required().messages({
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự",
    "any.required": "Phải nhập mô tả sản phẩm",
  }),
  category: Joi.string().required(),
}).options({
  abortEarly: false,
});
