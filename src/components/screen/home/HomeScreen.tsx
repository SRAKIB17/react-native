import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Section from '../../Section';

export default function HomeScreen() {

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Section title="Step One">
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                screen an
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, consequatur. Officiis vero cumque eos corrupti distinctio vitae asperiores recusandae ut, totam necessitatibus a, non voluptates, fugit in voluptatem consequatur nisi.
                Rem explicabo adipisci eligendi facilis, doloribus amet exercitationem fugit nobis dolorem, ab deserunt enim temporibus? Voluptate soluta id, illo eos accusantium nesciunt culpa placeat quae sequi repellendus, ea fugiat ratione.
                Provident dolorem doloremque unde dignissimos quis sed, similique enim voluptate ipsum consequuntur magnam exercitationem quasi? Excepturi, odit veritatis unde debitis suscipit, repudiandae magnam asperiores libero iure ipsum alias eveniet quae.
                Labore animi inventore possimus eius delectus quasi eos numquam cupiditate quis fugit. Officiis facilis excepturi repellat accusamus corporis dignissimos, inventore incidunt exercitationem veniam corrupti, voluptatibus consequuntur, quam nostrum. Libero, aliquam?
                Facilis minima illo molestias unde voluptate? Maiores ratione blanditiis veritatis a velit optio repellendus voluptates! Eum ad ipsa quos veniam saepe minus. Repellendus optio ipsum, quaerat vel tempora aperiam similique.
                Nihil ad cupiditate ut ab magni illo voluptatibus voluptas deleniti qui suscipit! Reiciendis provident vero magni, atque veritatis delectus sed esse ipsa eligendi ad, quos, quidem qui veniam eum excepturi.
                Reiciendis incidunt, sunt et, nemo placeat molestias excepturi iure quam quis, quo cum corporis. Doloribus aspernatur consequuntur distinctio rem nihil saepe, quibusdam recusandae facilis soluta ipsa, veritatis minima explicabo quidem.
                Perferendis ratione, ipsum explicabo exercitationem inventore, mollitia esse voluptas quam reprehenderit laboriosam dolores ducimus aspernatur voluptates? Quam ducimus enim modi sunt fugit, laborum voluptatem, dolores maiores voluptatibus praesentium similique tenetur?
                Dicta quo ad fugiat? Ipsam nam corrupti dicta ex et officiis odio voluptatem nemo modi nobis animi aperiam impedit numquam nulla tenetur maxime fuga vero accusantium, rerum quae aliquid fugiat.
                Voluptates tempore, iure totam quidem dolor molestiae sed ratione facilis dignissimos accusamus minima nostrum possimus optio obcaecati repellat omnis pariatur ab placeat sint. Tenetur dolorem est consequatur repudiandae debitis expedita.
                d then come back to see your edits.
            </Section>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
