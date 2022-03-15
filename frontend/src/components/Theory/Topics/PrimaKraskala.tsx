import React from 'react'
import { Navigation, Pagination, Zoom } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Description, Image, SwiperContainer, SwiperItem } from './styles'
import 'swiper/swiper-bundle.css'

const images = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/4x4_grid_spanning_tree.svg/800px-4x4_grid_spanning_tree.svg.png',
    description: 'Остовное дерево',
  },
]

const prima = [
  {
    url: 'http://urban-sanjoo.narod.ru/prim/prim.gif',
    description: 'Алгоритм Прима',
  },
]

const kraskal = [
  {
    url: 'http://urban-sanjoo.narod.ru/kruskal/kruskal.gif',
    description: 'Алгоритм Краскала',
  },
]

export const PrimaKraskala = () => {
  return (
    <>
      <h3 style={{ marginTop: 0 }}>Остовное дерево</h3>
      <p>
        Пусть G-неориентированный связный граф. Любой связный подграф <i>G1</i>{' '}
        &sub; G, содержащий все вершины графа и не имеющий циклов называется{' '}
        <u>остовом G или остовным деревом.</u>
      </p>
      <p>
        <u>Постановка задачи:</u> имеется связный граф, каждому ребру которого
        поставлено в соответствие неотрицательное число, называемое{' '}
        <u>весом ребра</u>. Найти остовное дерево минимального веса.{' '}
        <u>Вес дерева</u> равен сумме весов ребер, входящих в него.
      </p>
      <br />
      <p>
        Приведем конкретный пример задачи о нахождении минимального остовного
        дерева:
      </p>
      <p>
        Планируется создание сети дорог: необходимо <i>n</i> городов соединить
        дорогами, так, чтобы можно было добраться из любого города в любой
        другой (напрямую или через другие города). Числа на ребрах указывают
        стоимость строительства каждой дороги, соединяющей соответствующие
        города. Отсутствие ребра между двумя вершинами означает, что соединение
        соответствующих городов либо связано со слишком большими затратами, либо
        физически невозможно. Требуется решить, какие именно дороги нужно
        строить, чтобы минимизировать общую стоимость строительства.
      </p>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          loop={images.length !== 1}
        >
          {images.map(({ url, description }, i) => (
            <SwiperSlide key={i}>
              <SwiperItem>
                <Image src={url} />
                <Description>{description}</Description>
              </SwiperItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
      <p>
        Рассмотрим следующие алгоритмы для нахождения минимального остовного
        дерева: алгоритм Прима и алгоритм Краскала.
      </p>
      <h3>Алгоритм Прима:</h3>
      <p>
        <u>Шаг 1.</u> В качестве <i>G1 &sub; G</i> выбирается граф, вершинами
        которого являются вершины графа и который имеет одно ребро, выбранное из
        ребер <i>G</i>, имеющих минимальный вес.
      </p>
      <p>
        На каждом последующем шаге к уже построенному графу добавляется одно
        ребро.
      </p>
      <p>
        <u>Шаг k.</u> Если <i>Gk-1 &sub; G</i> уже построен, то граф{' '}
        <i>Gk &sub; G</i> получается из <i>Gk-1</i>
        добавлением ребра <i>l</i>, обладающего следующими свойствами:
      </p>
      <p>
        1) Ребро <i>l</i> является смежным кому-либо ребру <i>Gk-1</i>;
      </p>
      <p>
        2) При добавлении <i>l</i> к <i>Gk-1</i> не образуется циклов;
      </p>
      <p>
        3) <i>l</i> имеет минимальный вес среди ребер, удовлетворяющих условию
        1) и 2).
      </p>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination, Zoom]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          zoom={true}
          slidesPerView={1}
          loop={prima.length !== 1}
        >
          {prima.map(({ url, description }, i) => (
            <SwiperSlide key={i}>
              <SwiperItem>
                <div className="swiper-zoom-container">
                  <Image src={url} />
                </div>
                <Description>{description}</Description>
              </SwiperItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
      <h3 style={{ marginTop: 0 }}>Алгоритм Краскала:</h3>
      <p>
        <u>Шаг 1.</u> Тот же, что и алгоритме <b>Prim</b>
      </p>
      <p>
        <u>Шаг k.</u> Если <i>Gk-1</i> &sub; <i>G</i> уже построен, то граф{' '}
        <i>Gk &sub; G</i>
        получается из <i>Gk-1</i> добавлением ребра <i>l</i>, обладающего
        следующими свойствами:
        <p>
          1) При добавлении <i>l</i> к <i>Gk-1</i> не образуется циклов;
        </p>
        <p>
          2) <i>l</i> имеет минимальный вес среди ребер, удовлетворяющих условию
          1) и 2).
        </p>
        Алгоритм конечен, т.к. конечное число вершин. Число шагов <i>(n - 1)</i>
        , <i>n-</i>количество вершин.
      </p>
      <SwiperContainer style={{ marginBottom: 0 }}>
        <Swiper
          modules={[Navigation, Pagination, Zoom]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          zoom={true}
          slidesPerView={1}
          loop={kraskal.length !== 1}
        >
          {kraskal.map(({ url, description }, i) => (
            <SwiperSlide key={i}>
              <SwiperItem>
                <div className="swiper-zoom-container">
                  <Image src={url} />
                </div>
                <Description>{description}</Description>
              </SwiperItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </>
  )
}
