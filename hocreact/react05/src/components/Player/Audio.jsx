import { forwardRef, useImperativeHandle, useRef } from "react";
const Audio = (props, ref) => {
  //Tạo ref nội bộ trong component Audio
  const audioRef = useRef();
  useImperativeHandle(ref, () => {
    console.log("useImperativeHandle");
    return {
      chay: () => {
        audioRef.current.play();
      },
      dung: () => {
        audioRef.current.pause();
      },
    };
  });
  return (
    <>
      {console.log("Render")}
      <audio
        controls
        src="https://vnno-pt-1-tf-a128-zmp3.zmdcdn.me/5c355bb0b85f52cc28bd4581fde03eda?authen=exp=1702110024~acl=/5c355bb0b85f52cc28bd4581fde03eda/*~hmac=7055e10ebaa238e31bd904ff324e6fde"
        ref={audioRef}
      />
    </>
  );
};

export default forwardRef(Audio);

/*
Tính bao đóng --> Chỉ cho phép ở bên ngoài truy cập vào các phương thức, thuộc tính mà nó cho phép
*/
