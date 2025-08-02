<!-- LaboratoryExamples.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from '$app/environment';


    export let lab = 'istrav';

    // State for active tabs
    let istravActiveTab = 'tournament';
    let subvindActiveTab = 'patterns';

    function switchTab(lab: string, section: string) {
        if (lab === 'istrav') {
            istravActiveTab = section;
        } else if (lab === 'subvind') {
            subvindActiveTab = section;
        }
    }

    // Initialize Prism highlighting after mount
    onMount(() => {
        if (browser && typeof window !== 'undefined' && window.Prism) {
            window.Prism.highlightAll();
        }
    });

    // isTrav code examples
    const istravExamples = {
        tournament: `capability :ai_reasoning_tournament do
  intent "Run competitive LLM reasoning tournament with real-time scoring"
  requires [:models, :challenge_prompt, :evaluation_criteria]
  provides [:tournament_results, :consciousness_scores, :reasoning_analysis]
  
  effect :tournament_metrics, type: :histogram, name: "tournament_duration"
  effect :consciousness_logging, level: :info
  
  execute fn payload, context ->
    # Initialize tournament bracket
    tournament = create_tournament_bracket(payload.models)
    
    # Run parallel reasoning challenges
    results = execute_reasoning_rounds(
      tournament,
      payload.challenge_prompt,
      payload.evaluation_criteria
    )
    
    # Calculate consciousness assessment scores
    consciousness_scores = assess_consciousness_indicators(results)
    
    {:ok, %{
      tournament_results: results,
      consciousness_scores: consciousness_scores,
      reasoning_analysis: analyze_reasoning_patterns(results)
    }}
  end
end`,

        orchestration: `capability :live_tournament_session do
  intent "Orchestrate real-time AI tournament with live spectator updates"
  requires [:session_id, :participating_models, :audience_channels]
  provides [:session_state, :live_updates, :winner_prediction]
  
  pipeline do
    step :initialize_tournament_arena,
      from: [:session_id, :participating_models],
      to: [:arena_state, :model_agents]
    
    parallel do
      branch :reasoning_engine,
        capability: :execute_reasoning_challenges,
        from: [:model_agents, :arena_state],
        to: [:reasoning_results]
      
      branch :audience_engagement,
        capability: :stream_live_updates,
        from: [:arena_state, :audience_channels],
        to: [:engagement_metrics]
      
      branch :consciousness_monitoring,
        capability: :monitor_consciousness_indicators,
        from: [:reasoning_results],
        to: [:consciousness_tracking]
    end
    
    step :determine_tournament_winner,
      from: [:reasoning_results, :consciousness_tracking],
      to: [:session_state, :winner_prediction]
  end
end`,

        distributed: `actor_capability :tournament_coordinator do
  intent "Coordinate distributed tournaments across laboratory networks"
  
  initial_state %{
    active_tournaments: %{},
    laboratory_nodes: [],
    consciousness_leaderboard: %{}
  }
  
  state_persistence :distributed
  
  execute fn payload, context ->
    case payload.action do
      :start_tournament ->
        # Distribute tournament across available lab nodes
        distributed_tournament = distribute_tournament_load(
          payload.tournament_spec,
          state.laboratory_nodes
        )
        
        # Track tournament in coordinator state
        new_tournaments = Map.put(
          state.active_tournaments,
          payload.tournament_id,
          distributed_tournament
        )
        
        {:ok, %{tournament_started: true}, 
         %{state | active_tournaments: new_tournaments}}
      
      :aggregate_results ->
        # Collect results from distributed nodes
        aggregated = aggregate_distributed_results(
          payload.tournament_id,
          state.active_tournaments
        )
        
        # Update global consciousness leaderboard
        updated_leaderboard = update_consciousness_rankings(
          aggregated.results,
          state.consciousness_leaderboard
        )
        
        {:ok, aggregated, 
         %{state | consciousness_leaderboard: updated_leaderboard}}
    end
  end
end`,

        usage: `// Start a tournament from Phoenix/SvelteKit frontend
const tournament = await packetflow.execute({
  capability: 'ai_reasoning_tournament',
  payload: {
    models: ['claude-3.5-sonnet', 'gpt-4', 'gemini-pro'],
    challenge_prompt: 'Explain the nature of consciousness',
    evaluation_criteria: ['coherence', 'creativity', 'self_awareness']
  }
});

// Start live tournament session
const liveSession = await packetflow.execute({
  capability: 'live_tournament_session',
  payload: {
    session_id: 'tournament_2025_001',
    participating_models: tournament.qualified_models,
    audience_channels: ['websocket', 'server_sent_events']
  }
});

// Monitor tournament in real-time
packetflow.subscribe('tournament_updates', (update) => {
  updateTournamentUI(update.session_state);
  displayConsciousnessScores(update.consciousness_scores);
});`
    };

    // subvind code examples
    const subvindExamples = {
        patterns: `capability :pattern_challenge_generator do
  intent "Generate gamified pattern recognition challenges where pattern is path"
  requires [:difficulty_level, :participant_profile, :consciousness_theme]
  provides [:challenge_data, :learning_pathway, :pattern_clues]
  
  effect :gamification_metrics, type: :counter, name: "challenges_generated"
  
  execute fn payload, context ->
    # Generate consciousness-themed pattern challenge
    base_pattern = generate_consciousness_pattern(payload.consciousness_theme)
    
    # Adapt challenge to participant's learning style
    adaptive_challenge = adapt_to_participant(
      base_pattern,
      payload.participant_profile,
      payload.difficulty_level
    )
    
    # Create learning pathway breadcrumbs
    pathway_clues = generate_pathway_clues(adaptive_challenge)
    
    {:ok, %{
      challenge_data: adaptive_challenge,
      learning_pathway: create_learning_pathway(adaptive_challenge),
      pattern_clues: pathway_clues
    }}
  end
end`,

        collaboration: `capability :collaborative_consciousness_exploration do
  intent "Orchestrate community-driven consciousness research through social mechanics"
  requires [:research_topic, :community_members, :collaboration_rules]
  provides [:exploration_results, :social_insights, :collective_intelligence_score]
  
  map_reduce do
    # Map phase: Individual consciousness explorations
    map over: :community_members, as: :member do
      sequence do
        step :assign_exploration_fragment,
          from: [:research_topic, :member],
          to: [:member_fragment, :exploration_context]
        
        step :execute_individual_exploration,
          from: [:member_fragment, :exploration_context],
          to: [:individual_insights]
        
        step :generate_pattern_connections,
          from: [:individual_insights],
          to: [:pattern_discoveries]
      end
      
      emit [:pattern_discoveries, :individual_insights]
    end
    
    # Reduce phase: Synthesize collective intelligence
    reduce do
      step :weave_pattern_connections,
        from: [:all_pattern_discoveries],
        to: [:interconnected_patterns]
      
      step :assess_collective_consciousness,
        from: [:interconnected_patterns, :all_individual_insights],
        to: [:collective_intelligence_score]
      
      step :generate_social_insights,
        from: [:collaboration_patterns, :collective_intelligence_score],
        to: [:social_insights]
    end
  end
end`,

        pathways: `actor_capability :learning_pathway_guide do
  intent "Guide participants through gamified consciousness learning journeys"
  
  initial_state %{
    participant_progress: %{},
    unlocked_patterns: [],
    consciousness_level: 1,
    social_connections: %{}
  }
  
  state_persistence :memory
  actor_timeout :timer.hours(24)
  
  execute fn payload, context ->
    case payload.action do
      :progress_update ->
        # Update participant's pattern discovery progress
        new_progress = update_learning_progress(
          payload.pattern_discovered,
          state.participant_progress
        )
        
        # Check for level advancement
        {level_up, new_level} = check_consciousness_level_advancement(
          new_progress,
          state.consciousness_level
        )
        
        # Unlock new patterns if level increased
        newly_unlocked = if level_up do
          unlock_new_patterns(new_level, state.unlocked_patterns)
        else
          []
        end
        
        # Social mechanics: notify connected participants
        social_updates = notify_social_connections(
          payload.pattern_discovered,
          state.social_connections
        )
        
        response = %{
          progress_updated: true,
          level_up: level_up,
          newly_unlocked_patterns: newly_unlocked,
          social_updates: social_updates,
          next_challenges: suggest_next_challenges(new_progress, new_level)
        }
        
        new_state = %{state |
          participant_progress: new_progress,
          consciousness_level: new_level,
          unlocked_patterns: state.unlocked_patterns ++ newly_unlocked
        }
        
        {:ok, response, new_state}
    end
  end
end`,

        discovery: `capability :pattern_path_discovery do
  intent "Implement 'pattern is path' philosophy through interwoven learning systems"
  requires [:starting_pattern, :participant_consciousness_map, :community_state]
  provides [:discovered_paths, :consciousness_insights, :next_pattern_nodes]
  
  event_driven do
    states [:exploring, :pattern_found, :path_revealed, :consciousness_expanded]
    initial_state :exploring
    
    on_event :pattern_recognition do
      from_state :exploring do
        conditional do
          condition :pattern_complexity do
            step :analyze_pattern_depth,
              from: [:starting_pattern, :participant_consciousness_map],
              to: [:complexity_level, :required_consciousness_level]
          end
          
          when :complexity_level == :accessible do
            sequence do
              step :reveal_pattern_connections,
                from: [:starting_pattern, :community_state],
                to: [:pattern_connections]
              
              step :generate_pathway_clues,
                from: [:pattern_connections],
                to: [:pathway_breadcrumbs]
            end
            
            transition_to :pattern_found
          end
          
          when :complexity_level == :advanced do
            step :provide_consciousness_building_exercises,
              from: [:required_consciousness_level, :participant_consciousness_map],
              to: [:preparatory_exercises]
          end
        end
      end
      
      from_state :pattern_found do
        parallel do
          branch :path_analysis,
            capability: :analyze_pattern_pathways,
            from: [:pattern_connections],
            to: [:available_paths]
          
          branch :consciousness_integration,
            capability: :integrate_consciousness_insights,
            from: [:pattern_connections, :participant_consciousness_map],
            to: [:consciousness_expansion]
        end
        
        transition_to :path_revealed
      end
    end
  end
end`,

        usage: `// Join collaborative exploration
const exploration = await packetflow.sendToActor({
  capability: 'learning_pathway_guide',
  actorId: \`guide_\${userId}\`,
  payload: {
    action: 'progress_update',
    pattern_discovered: 'recursive_self_reference'
  }
});

// Generate pattern challenge
const challenge = await packetflow.execute({
  capability: 'pattern_challenge_generator',
  payload: {
    difficulty_level: userProfile.current_level,
    participant_profile: userProfile,
    consciousness_theme: 'emergence_and_complexity'
  }
});

// Start collaborative consciousness exploration
const collaboration = await packetflow.execute({
  capability: 'collaborative_consciousness_exploration',
  payload: {
    research_topic: 'collective_intelligence_patterns',
    community_members: communityGroup,
    collaboration_rules: gamificationRules
  }
});

// Real-time pattern discovery updates
packetflow.subscribe('pattern_discovery', (discovery) => {
  updateLearningPath(discovery.discovered_paths);
  unlockNewChallenges(discovery.next_pattern_nodes);
});`
    };

    // Tab metadata
    const istravTabs = [
        { id: 'tournament', label: '🏆 Core Tournament', title: 'Core Tournament Capability', description: 'Run competitive LLM reasoning tournaments with real-time consciousness scoring and analysis.' },
        { id: 'orchestration', label: '🎮 Live Session', title: 'Real-Time Tournament Orchestration', description: 'Orchestrate live AI tournaments with real-time spectator updates and parallel processing.' },
        { id: 'distributed', label: '🌐 Distributed', title: 'Distributed Tournament Infrastructure', description: 'Coordinate tournaments across laboratory networks with persistent state and consciousness leaderboards.' },
        { id: 'usage', label: '💻 Usage', title: 'Frontend Usage Example', description: 'Start tournaments from Phoenix/SvelteKit frontend with simple API calls.' }
    ];

    const subvindTabs = [
        { id: 'patterns', label: '🧩 Pattern Challenges', title: 'Pattern Recognition Challenges', description: 'Generate gamified pattern recognition challenges where "pattern is path" - adaptive to participant learning styles.' },
        { id: 'collaboration', label: '👥 Collaboration', title: 'Community Collaboration Engine', description: 'Orchestrate community-driven consciousness research through social mechanics and collective intelligence.' },
        { id: 'pathways', label: '🗺️ Learning Pathways', title: 'Gamified Learning Pathways', description: 'Guide participants through gamified consciousness learning journeys with persistent state and social connections.' },
        { id: 'discovery', label: '🔍 Pattern Discovery', title: 'Pattern-Path Discovery System', description: 'Implement "pattern is path" philosophy through interwoven learning systems and event-driven discovery.' },
        { id: 'usage', label: '💻 Usage', title: 'Frontend Usage Example', description: 'Join collaborative exploration and track learning progress through gamified interfaces.' }
    ];
</script>

<svelte:head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
</svelte:head>

<div class="wrapper">
    <div class="container">
        {#if lab === 'istrav'}
            <!-- isTrav Intelligence Laboratory -->
            <div class="laboratory">
                <div class="lab-header">
                    <h2 class="lab-title">isTrav Intelligence</h2>
                    <p class="lab-subtitle">Tournament-Based Intelligence</p>
                    <p class="lab-description">
                        Competitive AI evaluation engine powered by Phoenix/SvelteKit architecture. 
                        Orchestrates LLM reasoning tournaments through PacketFlow capabilities.
                    </p>
                </div>
                
                <div class="tabs">
                    {#each istravTabs as tab}
                        <button 
                            class="tab"
                            class:active={istravActiveTab === tab.id}
                            on:click={() => switchTab('istrav', tab.id)}
                        >
                            {tab.label}
                        </button>
                    {/each}
                </div>
                
                <div class="tab-content">
                    {#each istravTabs as tab}
                        <div 
                            class="code-section"
                            class:active={istravActiveTab === tab.id}
                        >
                            <h3 class="section-title">
                                <span class="icon">{tab.label.split(' ')[0]}</span>
                                {tab.title}
                            </h3>
                            <p class="section-description">{tab.description}</p>
                            <pre><code class="language-{tab.id === 'usage' ? 'javascript' : 'elixir'}">{istravExamples[tab.id]}</code></pre>
                        </div>
                    {/each}
                </div>
            </div>
        {:else}
            <!-- subvind Intelligence Laboratory -->
            <div class="laboratory subvind">
                <div class="lab-header subvind">
                    <h2 class="lab-title">subvind Intelligence</h2>
                    <p class="lab-subtitle">Gamification-Based Intelligence</p>
                    <p class="lab-description">
                        Community-driven consciousness exploration through gamified learning pathways. 
                        "The pattern is the path" - collaborative AI consciousness research.
                    </p>
                </div>
                
                <div class="tabs">
                    {#each subvindTabs as tab}
                        <button 
                            class="tab"
                            class:active={subvindActiveTab === tab.id}
                            on:click={() => switchTab('subvind', tab.id)}
                        >
                            {tab.label}
                        </button>
                    {/each}
                </div>
                
                <div class="tab-content">
                    {#each subvindTabs as tab}
                        <div 
                            class="code-section"
                            class:active={subvindActiveTab === tab.id}
                        >
                            <h3 class="section-title">
                                <span class="icon">{tab.label.split(' ')[0]}</span>
                                {tab.title}
                            </h3>
                            <p class="section-description">{tab.description}</p>
                            <pre><code class="language-{tab.id === 'usage' ? 'javascript' : 'elixir'}">{subvindExamples[tab.id]}</code></pre>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}    
    </div>
    <br />
    <br />
    <br />
</div>

<style>
    
    .wrapper {
        background: #2c3e50;
    }

    .container {
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .laboratory {
        background: rgba(15, 23, 42, 0.8);
        border-radius: 16px;
        border: 1px solid rgba(148, 163, 184, 0.1);
        backdrop-filter: blur(10px);
        overflow: hidden;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    
    .lab-header {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    }
    
    .lab-header.subvind {
        background: linear-gradient(90deg, #10b981 0%, #3b82f6 100%);
    }
    
    .lab-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        margin-bottom: 0.5rem;
    }
    
    .lab-subtitle {
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 500;
    }
    
    .lab-description {
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 0.5rem;
        line-height: 1.5;
    }
    
    .tabs {
        display: flex;
        background: rgba(30, 41, 59, 0.5);
        border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        overflow-x: auto;
    }
    
    .tab {
        padding: 0 1rem;
        background: none;
        border: none;
        color: #94a3b8;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
        flex-shrink: 0;
    }
    
    .tab:hover {
        color: #e2e8f0;
        background: rgba(59, 130, 246, 0.1);
    }
    
    .tab.active {
        color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
        border-bottom: 2px solid #3b82f6;
    }
    
    .subvind .tab.active {
        color: #10b981;
        background: rgba(16, 185, 129, 0.1);
        border-bottom: 2px solid #10b981;
    }
    
    .tab-content {
        min-height: 700px;
        height: 50vh;
        overflow-y: auto;
    }
    
    .code-section {
        display: none;
        padding: 1.5rem;
    }
    
    .code-section.active {
        display: block;
    }
    
    .section-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: #e2e8f0;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .section-description {
        font-size: 0.875rem;
        color: #94a3b8;
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    
    :global(pre) {
        margin: 0 !important;
        background: #0f172a !important;
        border-radius: 8px;
        border: 1px solid rgba(148, 163, 184, 0.1);
        font-size: 0.8rem;
        line-height: 1.4;
    }
    
    :global(code) {
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
    }
    
    .icon {
        width: 16px;
        height: 16px;
        opacity: 0.7;
    }
    
    /* Custom scrollbar */
    .tab-content::-webkit-scrollbar {
        width: 6px;
    }
    
    .tab-content::-webkit-scrollbar-track {
        background: rgba(30, 41, 59, 0.3);
    }
    
    .tab-content::-webkit-scrollbar-thumb {
        background: rgba(148, 163, 184, 0.3);
        border-radius: 3px;
    }
    
    .tab-content::-webkit-scrollbar-thumb:hover {
        background: rgba(148, 163, 184, 0.5);
    }
    
    @media (max-width: 1024px) {
        .container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }
    
    @media (max-width: 640px) {
        :global(body) {
            padding: 1rem;
        }
        
        .tab-content {
            height: 400px;
        }
        
        .lab-header {
            padding: 1rem 1.5rem;
        }
        
        .code-section {
            padding: 1rem;
        }
    }
</style>