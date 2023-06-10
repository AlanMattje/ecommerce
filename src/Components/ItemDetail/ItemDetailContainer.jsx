import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

const ItemDetailContainer = ({ cartItems, setCartItems }) => {
  const { id } = useParams();
  const [Productos, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const obtenerItem = async () => {
      setLoading(true);
      try {
        const itemRef = doc(db, 'Productos', id);
        const docSnap = await getDoc(itemRef);
        if (docSnap.exists()) {
          setProductos({ id: docSnap.id, ...docSnap.data() });
        } else {
        }
      } catch (error) {

      } finally {
        setLoading(false);
      }
    };

    obtenerItem();
  }, [id]);

  const subir = () => {
    setCantidad(cantidad + 1);
  };

  const bajar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    const itemExistente = cartItems?.find((cartItem) => cartItem.id === Productos.id);

    if (itemExistente) {
      const nuevosItems = cartItems.map((cartItem) => {
        if (cartItem.id === Productos.id) {
          return { ...cartItem, cantidad: cartItem.cantidad + cantidad };
        }
        return cartItem;
      });

      setCartItems(nuevosItems);
    } else {
      const nuevoItem = { ...Productos, cantidad };
      setCartItems([...cartItems, nuevoItem]);
    }

    setMensaje('Agregado al carrito');
    setTimeout(() => {
      setMensaje('');
    }, 1000);
  };

  return (
    <div>
      <button className="Volver" onClick={() => navigate(-1)}>Volver</button>
      {Loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {Productos ? (
            <div className="item-container">
              <div
                className={`image-container ${hovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img className="item-imagen" src={`/img/${Productos.Imagen}`} alt={Productos.Modelo} />
              </div>
              <div className="content-container">
                <div className="details-container">
                  <h1 className='precio'>Precio: ${Productos.Precio}</h1>
                  <div className="cantidades-container">
                    <span className="Cantidad">Cantidad: {cantidad}</span>
                    <div className="cantidades">
                      <button className="cantidad-menos" onClick={bajar}>-</button>
                      <button className="cantidad-mas" onClick={subir}>+</button>
                    </div>
                  </div>
                  <button className='agregar-carrito' onClick={agregarAlCarrito}>Agregar al carrito</button>
                </div>
                {mensaje && (
                  <div className="mensaje-container">
                    <p className="mensaje">{mensaje}</p>
                  </div>
                )}
              </div>
              <div className="content-container1">
                <h3>{Productos.Categoria}</h3>
                <h4>{Productos.Marca}</h4>
                <h4>{Productos.Modelo}</h4>
                <p className='descripcion'> Descripcion: {Productos.Descripcion}</p>
              </div>
            </div>
          ) : (
            <p>No se encontró el ítem.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
