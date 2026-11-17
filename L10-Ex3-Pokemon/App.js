import React, { useRef } from 'react';
import { StyleSheet, Text, View, SectionList, Pressable, Animated, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonRow from './PokemonRow';
import { datasource, dexNo, totalCards } from './data';

// Give every row a running number so the entrance animation is staggered top-to-bottom.
let counter = 0;
const sections = datasource.map((s) => ({
  ...s,
  data: s.data.map((p) => ({ ...p, order: counter++ })),
}));

// Pill-shaped gradient button with press-scale feedback.
function AddButton({ onPress }) {
  const scale = useRef(new Animated.Value(1)).current;
  const springTo = (v) => Animated.spring(scale, { toValue: v, useNativeDriver: true, speed: 30 }).start();
  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable onPress={onPress} onPressIn={() => springTo(0.95)} onPressOut={() => springTo(1)}>
        <LinearGradient
          colors={['#FF5F6D', '#E3350D']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.addButton}
        >
          <View style={styles.addIcon}>
            <MaterialCommunityIcons name="plus" size={18} color="#E3350D" />
          </View>
          <Text style={styles.addButtonText}>ADD POKEMON</Text>
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
}

function PokemonScreen() {
  const insets = useSafeAreaInsets();
  const listRef = useRef(null);

  // Quick-jump chips: scroll to that type's section
  const jumpTo = (sectionIndex) =>
    listRef.current?.scrollToLocation({ sectionIndex, itemIndex: 0, viewOffset: 0, animated: true });

  const showDetails = (item, section) =>
    Alert.alert(item.key, `${section.title} type\nPokedex ${dexNo(item.card)} - Card ${item.card}/165 (Scarlet & Violet 151)`);

  // Sticky, gradient, type-coloured section header with icon + count chip
  const renderSectionHeader = ({ section }) => (
    <View style={styles.headerWrap}>
      <LinearGradient
        colors={section.colours}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.header, { boxShadow: `0 6px 18px ${section.colours[1]}66` }]}
      >
        <View style={styles.headerIcon}>
          <MaterialCommunityIcons name={section.icon} size={20} color="#fff" />
        </View>
        <Text style={styles.headerText}>{section.title}</Text>
        <View style={styles.countChip}>
          <Text style={styles.countText}>{section.data.length}</Text>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Dark premium background */}
      <LinearGradient colors={['#070A18', '#12173A', '#070A18']} style={StyleSheet.absoluteFill} />

      {/* Top area: title, subtitle, quick-jump chips, ADD POKEMON button (above the list) */}
      <View style={[styles.top, { paddingTop: insets.top + 12 }]}>
        <View style={styles.brandRow}>
          <MaterialCommunityIcons name="pokeball" size={18} color="#FF5F6D" />
          <Text style={styles.brand}>SCARLET & VIOLET 151</Text>
        </View>
        <Text style={styles.title}>Pokemon Cards</Text>
        <Text style={styles.subtitle}>{totalCards} cards across {sections.length} elements</Text>

        <View style={styles.chips}>
          {sections.map((s, i) => (
            <Pressable key={s.title} onPress={() => jumpTo(i)} style={[styles.chip, { borderColor: s.colours[0] + '77' }]}>
              <MaterialCommunityIcons name={s.icon} size={14} color={s.colours[0]} />
              <Text style={styles.chipText}>{s.title}</Text>
            </Pressable>
          ))}
        </View>

        <AddButton onPress={() => Alert.alert('Add Pokemon', 'Coming next lesson!')} />
      </View>

      <SectionList
        ref={listRef}
        sections={sections}
        keyExtractor={(item) => item.key}
        renderItem={({ item, section }) => (
          <PokemonRow item={item} section={section} order={item.order} onPress={showDetails} />
        )}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 30 }}
        ListFooterComponent={<Text style={styles.footer}>Gotta catch 'em all</Text>}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PokemonScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A18',
  },
  top: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  brand: {
    color: '#FF8A94',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    marginTop: 4,
    letterSpacing: 0.3,
  },
  subtitle: {
    color: '#8E96BC',
    fontSize: 14,
    marginTop: 2,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
    marginBottom: 14,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  chipText: {
    color: '#E6E9F8',
    fontSize: 12,
    fontWeight: '700',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 999,
    gap: 10,
    boxShadow: '0 8px 24px rgba(227,53,13,0.45)',
  },
  addIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  headerWrap: {
    // solid strip behind the sticky header so rows don't show through it
    backgroundColor: '#0B0F26',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  headerIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    marginLeft: 10,
    letterSpacing: 0.5,
  },
  countChip: {
    minWidth: 30,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
  },
  countText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 13,
  },
  footer: {
    color: '#4E5680',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 12,
    letterSpacing: 2,
  },
});
