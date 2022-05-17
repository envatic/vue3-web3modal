const _props = {
  bg: String,
  backgroundColor: String,
  borderColor: String,
  color: String,

  borderRadius: Number,
  borderWidth: Number,

  f: [Number, Array, String],
  fontSize: [Number, Array, String],

  m: [Number, Array, String],
  mx: [Number, Array, String],
  my: [Number, Array, String],
  mt: [Number, Array, String],
  mr: [Number, Array, String],
  ml: [Number, Array, String],
  mb: [Number, Array, String],
  margin: [Number, Array, String],
  marginTop: [Number, Array, String],
  marginRight: [Number, Array, String],
  marginLeft: [Number, Array, String],
  marginBottom: [Number, Array, String],
  p: [Number, Array, String],
  py: [Number, Array, String],
  px: [Number, Array, String],
  pt: [Number, Array, String],
  pr: [Number, Array, String],
  pl: [Number, Array, String],
  pb: [Number, Array, String],
  padding: [Number, Array, String],
  paddingTop: [Number, Array, String],
  paddingRight: [Number, Array, String],
  paddingLeft: [Number, Array, String],
  paddingBottom: [Number, Array, String],

  width: [String, Number, Array, String],
  w: [String, Number, Array, String],

  boxShadow: [String, Number],

  fontWeight: [String, Number],

  letterSpacing: Number,
  lineHeight: Number,

  flex: [String, Array],
  align: [String, Array],
  justify: [String, Array],
  wrap: [String, Array],
  flexDirection: [String, Array],
  alignSelf: [String, Array]
};

export default (props = {}) => {
  return { ..._props, ...props };
};
