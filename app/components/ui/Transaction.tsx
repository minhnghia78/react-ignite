import { StyleSheet, View } from "react-native"
import { ListItem } from "../ListItem"
import { Text } from "../Text"
import { ListView } from "../ListView"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import Feather from "@expo/vector-icons/Feather"
import { Item } from "../Item"
const DATA = [
  {
    id: "t1",
    img: <MaterialIcons name="groups" size={16} />,
    title: "Mua sắm",
    balance: "123.000đ",
    amountType: "minus",
    time: "20/9/24, 10:53",
    trader: "Tylie, Thảo",
  },
  {
    id: "t2",
    img: <MaterialIcons name="groups" size={16} />,
    title: "Du lịch",
    balance: "123.000đ",
    amountType: "minus",
    time: "20/9/24, 10:53",
    trader: "Bình,An, Tylie,...",
  },
  {
    id: "t3",
    img: <Feather name="type" size={16} />,
    title: "Cà phê",
    balance: "123.000đ",
    amountType: "minus",
    time: "20/9/24, 10:53",
    trader: "Phương, Thảo",
  },
  {
    id: "t4",
    img: <MaterialIcons name="groups" size={16} />,
    title: "Mua sắm",
    balance: "123.000đ",
    amountType: "plus",
    time: "20/9/24, 10:53",
    trader: "Tylie",
  },
]
const TYPE = "transaction"
export function Transaction() {
  return (
    <View style={style.container}>
      <ListItem
        height={19}
        LeftComponent={<Text text="Tổng thu chi gần đây" size="sm" weight="bold" />}
        RightComponent={<Text text="Xem tất cả" size="xs" style={{ color: "#5945FE" }} />}
      />
      <ListView
        style={style.listContainer}
        data={DATA}
        renderItem={({ item }) => <Item type={TYPE} item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
  },
  listContainer: {
    borderRadius: 16,
    padding: 12,
    gap: 16,
    backgroundColor: "#F6F7F9",
  },
})
