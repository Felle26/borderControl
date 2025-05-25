import "./CharacterImage.style.css";
import './../../Char/Glasses.svg';
import './../../Char/Beard_1.svg';
import './../../Char/Beard_2.svg';
import './../../Char/Beard_3.svg';
import './../../Char/Hair_Short_Black.svg';
import './../../Char/Hair_Short_Brown.svg';

export function CharacterImage( {PassportData})
{ 
  let Hair = "Hair_Short_Black"; // Default hair type, can be changed based on PassportData
  let Beard = "Beard_No"; // Default beard type, can be changed based on PassportData
  let Glasses = "Glasses_No"; // Default glasses type, can be changed based on PassportData
  let Shirt = "Shirt_1"; // Default shirt type, can be changed based on PassportData
  let Eyes = "Eyes_Blue"; // Default eye color, can be changed based on PassportData
  let Skin = "Skin_Fair"; // Default

  const Images = {
    Assets: {
      Glasses_No: '/Char/Beard_2.svg',
      Glasses: '/Char/Glasses.svg',
      Beard_1: '/Char/Beard_1.svg',
      Beard_No: '/Char/Beard_2.svg',
      Beard_3: '/Char/Beard_3.svg',
    },
    Hair: {
      Hair_Short_Black: '/Char/Hair_Short_Black.svg',
      Hair_Short_Brown: '/Char/Hair_Short_Brown.svg',
      Hair_Short_Blonde: 'Char/Hair_Short_Blonde.svg',
      Hair_Short_Red: '/Char/Hair_Short_Red.svg',
      Hair_Long_Black: '/Char/Hair_Long_Black.svg',
      Hair_Long_Brown: '/Char/Hair_Long_Brown.svg',
      Hair_Long_Blonde: '/Char/Hair_Long_Blonde.svg',
      Hair_Long_Red: '/Char/Hair_Long_Red.svg',
      Hair_No_Hair: '/Char/Beard_2.svg'
    },
    Shirts: {
      Shirt_1: '/Char/Shirt_1.svg',
      Shirt_2: '/Char/Shirt_2.svg',
      Shirt_3: '/Char/Shirt_3.svg',
    },
    Eyes: {
      Eyes_Blue: '/Char/Eye_Blue.svg',
      Eyes_Brown: '/Char/Eye_Brown.svg',
      Eyes_Green: '/Char/Eye_Green.svg',
    },
    Skins: {
      Brown: '/Char/Skin_Brown.svg',
      Fair: '/Char/Skin_Fair.svg',
      Medium: '/Char/Skin_Medium.svg',
    }
  };
  const getImage = () => {
    switch (PassportData.HairColor) {
      case "black":
        if (PassportData.Sex === "m") {
          Hair = Images.Hair.Hair_Short_Black;
        }
        else {
          Hair = Images.Hair.Hair_Long_Black;

        }
        break;
      case "brown":
        if (PassportData.Sex === "m") {
          Hair = Images.Hair.Hair_Short_Brown;
        } else {
          Hair = Images.Hair.Hair_Long_Brown;
        }
        break;
      case "blonde":
        if (PassportData.Sex === "m") {
          Hair = Images.Hair.Hair_Short_Blonde;
        } else {
          Hair = Images.Hair.Hair_Long_Blonde;
        }
        break;
      case "red":
        if (PassportData.Sex === "m") {
          Hair = Images.Hair.Hair_Short_Red;
        } else {
          Hair = Images.Hair.Hair_Long_Red;
        }
        break;
    }

    if (PassportData.Sex === "m") {
      switch (PassportData.Beard) {
        case 'Beard_1':
            Beard = Images.Assets.Beard_1;
            break;
        case 'Beard_3':
          Beard = Images.Assets.Beard_3;
          break;
        case 'Beard_2':
          Beard = Images.Assets.Beard_2;
          break;
        default:
          Beard = Images.Assets.Beard_No;
      }
      
    }
    else {
      Beard = Images.Assets.Beard_No;
    }
    switch (PassportData.Shirt) {
      case 'Shirt_1':
        Shirt = Images.Shirts.Shirt_1;
        break;
      case 'Shirt_2':
        Shirt = Images.Shirts.Shirt_2;
        break;
      case 'Shirt_3':
        Shirt = Images.Shirts.Shirt_3;
        break;
    }
    
    switch (PassportData.Glasses) {
      case true:
        Glasses = Images.Assets.Glasses;
        break;
      case false:
        Glasses = Images.Assets.Glasses_No;
        break;
    }

    switch (PassportData.SkinColor) {
      case "brown":
        Skin = Images.Skins.Brown;
        
        break;
      case "fair":
        Skin = Images.Skins.Fair;
        break;
      case "medium":
        Skin = Images.Skins.Medium;

        break;
    }
      
    
    switch (PassportData.EyeColor) {
      case "blue":
        Eyes = Images.Eyes.Eyes_Blue;
        break;
      case "brown":
        Eyes = Images.Eyes.Eyes_Brown;
        break;
      case "green":
        Eyes = Images.Eyes.Eyes_Green;
        break;
    }
  }
  getImage();
  // You can use PassportData to dynamically change the images if needed
 

  return (
    <>
      <div className="Image_Wrapper">
        <img className="Hair" src={Hair} alt="" />
        <img className="Glasses" src={Glasses} alt="" />
        <img className="Eyes" src={Eyes} alt="" />
        <img className="Beard" src={Beard} alt="" />
        <img className="Skin" src={Skin} alt="" />
        <img className="Shirt" src={Shirt} alt="" />
      </div>
    </>
  );
 }

