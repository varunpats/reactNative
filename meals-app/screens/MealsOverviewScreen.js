import { View, FlatList, StyleSheet } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    })

    function renderMeal(itemData) {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }

        return <MealItem {...mealItemProps} />
    }

    return <View style={styles.container}>
        <FlatList
            data={displayMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMeal}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})