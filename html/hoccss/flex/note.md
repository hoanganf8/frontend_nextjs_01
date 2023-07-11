# Flex = Flexible Box Moudule

## Các thuộc tính trong nhóm Flex Container

- display: flex | inline-flex => Kích hoạt flex
- flex-direction: Chọn trục cho flex

* row: Nằm ngang
* row-reverse: Nằm ngang đảo ngược
* column: Nằm dọc
* column-reverse: Nằm đọc đảo ngược

- justify-content: Căn chỉnh các item theo hướng song song với trục chính

* flex-start
* flex-end
* center
* space-around
* space-between
* space-evenly

- align-items: Căn chỉnh các item theo hướng vuông góc với trục chính (cross)

* stretch => Mặc định, full chiều cao
* flex-start
* center
* flex-end
* baseline

- flex-wrap

* nowrap => Mặc định
* wrap
* wrap-reverse

- align-content: Căn chỉnh hàng (cột) => Chỉ áp dụng khi có nhiều hàng (cột)

* stretch
* flex-start
* flex-end
* center
* space-around
* space-between
* space-evenly

- gap

## Các thuộc tính trong nhóm Flex Item

- flex-grow: Dãn các item để lấp đầy khoảng cách còn trống
- flex-shrink: Tự động co lại các item
- flex-basis: Thiết lập kích thước ban đầu cho các item
  => flex-basis sẽ bị chặn bởi min-width, max-width
- flex: grow shrink basis
- align-selft: Căn chỉnh 1 item

* stretch => Mặc định, full chiều cao
* flex-start
* center
* flex-end
* baseline

- order: Sắp xếp thứ tự các item
  => Nhận số nguyên
